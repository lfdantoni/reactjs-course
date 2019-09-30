import React from 'react';
import './App.css';
import CardList from './components/CardList';
import Detail from './components/Detail';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/:id" component={Detail}/>
            <Route component={CardList}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
