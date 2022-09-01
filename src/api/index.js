import {get, post} from '../utils/request';
// todo
const queryPerson = get('/test/person');
const queryPerson1 = post('/test/person');



export {
  queryPerson,
  queryPerson1
}