import { combineReducers, createStore } from "redux"

// Actions types
const ACTION_TYPES = {
    ADD_TODO: 'ADD_TODO',
    DONE_TODO: 'DONE_TODO',
    SET_USER_NAME: 'SET_USER_NAME',
    SET_USER_EMAIL: 'SET_USER_EMAIL'
}

// Action creators
const addTodo = (description) => {
    return {
        type: ACTION_TYPES.ADD_TODO,
        payload: {
            id: new Date().getTime(),
            description
        }
    }
}

const doneTodo = (id, comment) => {
    return {
        type: ACTION_TYPES.DONE_TODO,
        payload: {
            id,
            comment
        }
    }
}

const setUserName = (userName) => {
    return {
        type: ACTION_TYPES.SET_USER_NAME,
        payload: {
            userName
        }
    }
}

const setUserEmail = (userEmail) => {
    return {
        type: ACTION_TYPES.SET_USER_EMAIL,
        payload: {
            userEmail
        }
    }
}

// Reducers

const todos = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            return state.concat([
                { 
                    id: action.payload.id,
                    description: action.payload.description,
                    state: 'PENDING',
                    commentState: ''
                }
            ]);
        case ACTION_TYPES.DONE_TODO:
            const newState = state.map((stateElem) => { return {...stateElem} } );
            const todo = newState.find((elem) => elem.id === action.payload.id);

            todo.state = 'DONE';
            todo.commentState = action.payload.comment;

            return newState
        default:
            return state;
    }
}

const user = (state = {}, action) => {
    switch(action.type) {
        case ACTION_TYPES.SET_USER_NAME:
            return {
                ...state,
                name: action.payload.userName
            }
        case ACTION_TYPES.SET_USER_EMAIL:
            return {
                ...state,
                email: action.payload.userEmail
            }
        default:
            return state;
    }
}

// Combine Reducers

const reducers = combineReducers({
    todos,
    user
});

// Create Store + Set Up Redux Devtools
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Add store subscriber
store.subscribe(() => {
    console.log(store.getState());
    if( store.getState().todos.length &&
        store.getState().todos[0].state === 'PENDING') {

            store.dispatch(doneTodo(store.getState().todos[0].id, ''));
    }
})

// Dispatch Actions

store.dispatch(addTodo('Clean my bedroom'));
store.dispatch(setUserName('Pepe Argento'));
store.dispatch(setUserEmail('test@test.com'));
