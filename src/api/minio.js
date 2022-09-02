import { get, post } from '../utils/request';

export function getFiles() {
  return get('/minio/list');
}

export function deleteFile(id) {
  return post(`/minio/delete/${id}`);
}