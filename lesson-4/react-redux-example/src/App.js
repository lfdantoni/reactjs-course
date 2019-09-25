import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import TodoListContainer from './components/TodoListContainer';

function App() {
  return (
    <Provider store={store}>
      <TodoListContainer />
    </Provider>
  );
}

export default App;
