import { get, post, request } from '../utils/request';

export function getFiles() {
  return get('/minio/list');
}

export function deleteFile(id) {
  return post(`/minio/delete/${id}`);
}

export function uploadFile(files) {
  return request('/minio/upload', files);
}