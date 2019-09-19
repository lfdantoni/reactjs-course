import React from 'react';
import './App.css';
import ListCards from './components/ListCards';
import Detail from './components/Detail';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/:id" component={Detail}/>
          <Route component={ListCards}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
