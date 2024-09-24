import { axiosETAGCache } from './axiosETag';

export const baseURL = `${process.env.REACT_APP_BACKEND_HOST}${process.env.REACT_APP_BACKEND_SUBDOMAIN}`;

export const axios = axiosETAGCache({ baseURL, withCredentials: true });
