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
  return new Promise((resolve, reject) => {
    axios.get(URL_PREFIX + url)
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

export function post(url, params = {}) {
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

export function request(url, data) {
  let formData = new FormData();
  formData.append("files", data);

  let config = {
    url: URL_PREFIX + url,
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': undefined
    }
  }
  return axios.request(config);
}