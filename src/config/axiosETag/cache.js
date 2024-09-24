class BaseCache {
  cache = {}

  get(key) {
    return this.cache[key]
  }

  set(key, value) {
    this.cache[key] = value
  }

  remove(key) {
    this.cache[key] = ''
  }

  flushAll() {
    this.cache = {}
  }
}

export class Cache {
  static instance
  cache

  static getInstance() {
    if (!this.instance) this.instance = new Cache(new BaseCache())

    return this.instance
  }

  static get(uuid) {
    return this.getInstance().cache.get(uuid)
  }

  static set(uuid, etag, value) {
    return this.getInstance().cache.set(uuid, { etag, value })
  }

  static remove(uuid) {
    this.getInstance().cache.remove(uuid)
  }

  static reset() {
    this.getInstance().cache.flushAll()
  }

  constructor(cache) {
    this.cache = cache
  }
}