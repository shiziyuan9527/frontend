import axios from "axios";

axios.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
})

axios.interceptors.response.use(res => {
  return res;
}, err => {
  return Promise.reject(err);
})

const SUCCESS_CODE = 200;
const URL_PREFIX = 'http://localhost:8080';

export function get(url) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(URL_PREFIX + url, { params })
        .then(res => {
          if (res.status === SUCCESS_CODE) {
            resolve(res.data);
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}

export function post(url) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(URL_PREFIX + url, params)
        .then(res => {
          if (res.status === SUCCESS_CODE) {
            resolve(res.data);
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}