import React, {Component, PureComponent} from 'react';
import styles from './styles.module.css';
import {StateChild} from './StateChild'

// Use the following line in order to avoid unnecessary re-renders
// export class State extends PureComponent {
export class State extends PureComponent {
  state = {
    myStateValue: 'test value',
    counter: 0
  }

  needMoney = (count) => {
    console.log('It needs $' + count + ' ' + this.state.myStateValue);

    // the counter is only gonna increment by 1
    // this.setState({counter: this.state.counter + 1 });
    // this.setState({counter: this.state.counter + 1 });
    // this.setState({counter: this.state.counter + 1 });

    // the following lines will fix the previous issue
    // this.setState((state) => {
    //   return {counter: state.counter + 1 }
    // });

    // this.setState((state) => {
    //   return {counter: state.counter + 1 }
    // });
  }

  render() {
    console.log('State render executed!');
    
    return <h2 className={styles.title}>
      State component: {this.state.myStateValue}
      <br/>
      Counter: {this.state.counter}
      <br/>
      <StateChild callback={this.needMoney} />
    </h2>
  }

  /**
   * It will update every time if State component extends of Component
   * To avoid it, the component should extend of PureComponent
   */
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ myStateValue: 'test value'});
    }, 2000)
  }

  componentWillUnmount() {
    if(this.intervalID) {
      clearInterval(this.intervalID);
    }
  }
}