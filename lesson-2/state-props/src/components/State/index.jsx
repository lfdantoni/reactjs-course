import React, {Component, PureComponent} from 'react';
import styles from './styles.module.css';
import {StateChild} from './StateChild'

// Use the following line in order to avoid unnecessary re-renders
// export class State extends PureComponent {
export class State extends Component {
  state = {
    myStateValue: 'test value'
  }

  needMoney = (count) => {
    console.log('It needs $' + count + ' ' + this.state.myStateValue);
  }

  render() {
    console.log('State render executed!');
    
    return <h2 className={styles.title}>
      State component: {this.state.myStateValue}
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