import axios from "axios";

const request = axios.create({
  url: 'http://localhost:8080'
})

export default request

export function get(url) {
  return function (params) {
    return axios.get(url, params)
      .then(res => {
        return res.data;
      }).catch(err => {
        // todo
      })
  }
}