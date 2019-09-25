import {combineReducers} from 'redux';
import user from './user';
import todos from './todos';

const reducers = combineReducers({
    user,
    todos
});

export default reducers;
