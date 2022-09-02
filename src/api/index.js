import {get, post} from '../utils/request';

export function queryPerson() {
  return get('/test/person');
}