import React from 'react';
import './App.css';
import { Container } from './Container';

class App extends React.PureComponent {
  state = {
    testValue: 0,
  }

  changeValue = (event) => {
    this.setState({ testValue: event.target.value })
  }

  render() {
    return (
      <div>
        <Container test={this.state.testValue} />
        <br />
        <Container test={this.state.testValue} />
        <br />
        <br />
        Test <input value={this.state.testValue} onChange={this.changeValue} />
      </div>
    );
  }

}

export default App;
