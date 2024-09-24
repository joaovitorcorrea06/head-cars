import { Cache } from './cache'
import axios from 'axios'

export const getHeaderCaseInsensitive = (headerName, headers = {}) => {
  const toLowerCase = value => value.toLowerCase();
  const byLowerCase = toFind => value => toLowerCase(value) === toFind;
  const getKeys = headers => Object.keys(headers);

  const key = getKeys(headers).find(byLowerCase(headerName));
  return key ? headers[key] : undefined;
};

function isCacheableMethod(config) {
  if (!config.method) return false
  return ~['GET', 'HEAD'].indexOf(config.method.toUpperCase())
}

function getUUIDByAxiosConfig(config) {
  return config.url
}

export const getCacheByAxiosConfig = (config) => {
  const url = getUUIDByAxiosConfig(config)

  if (url) return Cache.get(url)

  return undefined
}

function requestInterceptor(config) {
  if (isCacheableMethod(config)) {
    const uuid = getUUIDByAxiosConfig(config)

    if (!uuid) return undefined

    const lastCachedResult = Cache.get(uuid)

    if (lastCachedResult) config.headers = { ...config.headers, 'If-None-Match': lastCachedResult.etag }
  }

  return config
}

function responseInterceptor(response) {
  if (isCacheableMethod(response.config)) {
    const responseETAG = getHeaderCaseInsensitive('etag', response.headers)

    if (responseETAG) {
      const uuid = getUUIDByAxiosConfig(response.config)

      if (!uuid) return null

      Cache.set(uuid, responseETAG, response.data)
    }
  }

  return response
}

function responseErrorInterceptor(error) {
  if (error?.response?.status === 304) {
    const getCachedResult = getCacheByAxiosConfig(error.response.config)

    if (!getCachedResult) return Promise.reject(error)

    const newResponse = error.response

    newResponse.status = 200
    newResponse.data = getCachedResult.value

    return Promise.resolve(newResponse)
  }

  return Promise.reject(error)
}

export function resetCache() {
  Cache.reset()
}

export function axiosETAGCache(config) {
  const instance = axios.create(config)

  instance.interceptors.request.use(requestInterceptor)
  instance.interceptors.response.use(responseInterceptor, responseErrorInterceptor)

  return instance
}
