import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <img src={"https://images.pexels.com/photos/2254030/pexels-photo-2254030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
      </div>
    )}
  </Transition>
);

class FadeTransition extends PureComponent {
  state = {
    show: false
  }

  render() {
    return (
        <>
          <button onClick={() =>this.setState((state) => ({show: !state.show}) )}>
            Click to Enter
          </button>
          <Fade in={this.state.show}/>
        </>
      );
    }
}

export default FadeTransition;
