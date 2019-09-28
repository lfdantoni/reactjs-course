import React from 'react';
import './App.css';
import { Transition } from 'react-transition-group';

const duration = 600;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, color ${duration}ms ease-in-out`,
  opacity: 0,
  color: 'red'
}

const transitionStyles = {
  entering: { opacity: 1, color: 'green' },
  entered:  { opacity: 1, color: 'green' },
  exiting:  { opacity: 0, color: 'blue' },
  exited:  { opacity: 0, color: 'red' },
};

const Fade = ({inProp}) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }} className={`custom-${state}`}>
        I'm a fade Transition! {state}
      </div>
    )}
  </Transition>
);

class App extends React.Component {
  state = {
    inProp: false
  }

  toggle = () => {
    this.setState(
      (state) => ({inProp: !state.inProp})
    )
  }

  render() {
    return (
      <div className="App">
        <Fade inProp={this.state.inProp}/>
        <button onClick={this.toggle}>TOGLE</button>
      </div>
    );
  }
}

export default App;
