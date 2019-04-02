import React, { Component, Fragment } from 'react';
import './App.css';
import Padre from './Padre';
import Madre from './Madre';

class App extends Component {
  render() {
    return (
      <Fragment >
        <Madre nombre="Ana" />
        <Padre />
      </Fragment>
    );
  }
}

export default App;
