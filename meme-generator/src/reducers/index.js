import { combineReducers } from "redux";
import {memes} from './memes';
import {user} from './user';

export const reducers = combineReducers({
  memes,
  user
})
