import { get, post, request, fileDownload } from '../utils/request';

export function getFiles() {
  return get('/minio/list');
}

export function deleteFile(name) {
  return post(`/minio/delete/${name}`);
}

export function uploadFile(files) {
  return request('/minio/upload', files);
}

export function downloadFile(name) {
  return fileDownload(`/minio/download/${name}`, name)
}