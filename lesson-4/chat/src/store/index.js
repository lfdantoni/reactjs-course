import { createStore, combineReducers } from "redux";
import {messages, settings, socket} from '../reducers';
import {setSocket, receiveMessage, socketClosed} from '../actions';

var HOST = 'ws://lfdantoni.herokuapp.com'; // location.origin.replace(/^http/, 'ws')
const ws = new WebSocket(HOST);

const reducers = combineReducers({
    messages,
    settings,
    socket
})

const store = createStore(
    reducers, /* preloadedState, */ 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch(setSocket(ws));

ws.onmessage = function (event) {
    const eventData = JSON.parse(event.data);
    store.dispatch(receiveMessage(eventData.message, eventData.nickname));
};

ws.onclose = function() { 
    store.dispatch(socketClosed());
 };

export default store;