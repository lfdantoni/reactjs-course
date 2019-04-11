import { createStore, combineReducers } from "redux";

// Action creators
const addTodo = (description) => {
    return {
        type: 'ADD_TODO',
        text: description
    }
}

const doneTodo = (description) => {
    return {
        type: 'DONE_TODO',
        text: description
    }
}

const setUserName = (name) => {
    return {
        type: 'SET_NAME',
        name
    }
}

const setUserEmail = (email) => {
    return {
        type: 'SET_EMAIL',
        email
    }
}

// Reducers
const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        case 'DONE_TODO':
            const resp = state.slice(0);
            const idx = resp.indexOf(action.text);
            resp.splice(idx, 1);
            return resp;
        default:
            return state;
    }
}

const user = (state = {}, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            }
        default:
            return state;
    }
}

// Combine reducers
const reducers = combineReducers({
    todos,
    user
});

// Create Store + Set Up Redux Devtools
const store = createStore(
    reducers, /* preloadedState, */ 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subscribe to all changes
store.subscribe(() => {
    console.log(store.getState());
})

// Dispatch actions
store.dispatch(addTodo('do things'));
store.dispatch(addTodo('clean my house'));

store.dispatch(doneTodo('do things'));


store.dispatch(setUserName('Leonardo DAntoni'));
store.dispatch(setUserEmail('lfdantoni@gmail.com'));