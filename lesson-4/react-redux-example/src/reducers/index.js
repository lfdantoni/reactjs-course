import {todos} from './todos';
import {user} from './user';
import {combineReducers} from 'redux';

export default combineReducers({
  todos,
  user
})