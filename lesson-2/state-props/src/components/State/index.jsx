import React, {Component, PureComponent, Fragment} from 'react';
import styles from './styles.module.css';
import {StateChild} from './StateChild'

const inlineStyles = {
  counter: {
    color: 'blue',
    fontSize: '25px'
  }
}

// Use the following line in order to avoid unnecessary re-renders
// export class State extends PureComponent {
export class State extends PureComponent {
  state = {
    myStateValue: 'test value',
    counter: 0,
    input: '',
    array: ['red', 'blue', 'yellow', 'green']
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

  handleChange = (event) => {
    this.setState({input: event.target.value})
  }

  render() {
    console.log('State render executed!');
    
    return <Fragment>
      <h2 className={styles.title}> State component: {this.state.myStateValue} </h2>
      <br/>
      <h3 style={inlineStyles.counter}>Counter: {this.state.counter}</h3>
      <br/>
      <StateChild callback={this.needMoney} />
      <br/>
      <input type="text" value={this.state.input} onChange={this.handleChange}/>
      <br/>
      {this.state.array.map((color, index) => {
        return <div style={{color}} key={index}>{color}</div>
      })}
    </Fragment>
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