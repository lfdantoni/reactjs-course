import { combineReducers, createStore } from 'redux'
import {books} from '../reducers';

const reducers = combineReducers({
  books
})

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);