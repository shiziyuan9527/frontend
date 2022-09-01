import { get, post } from '../utils/request';
import axios from 'axios';


const getFiles = get('/minio/list');

export function deleteFile(id) {
  return axios.post(`http://localhost:8000/minio/delete/${id}`);
}

export {
  getFiles
}