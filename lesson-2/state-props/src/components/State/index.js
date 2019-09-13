import React, {Component} from 'react';
import styles from './styles.module.css';
import {StateChild} from './StateChild'

export class State extends Component {
    state = {
        myStateValue: 'test value'
    }

    needMoney = (count) => {
        console.log('It needs $' + count + ' ' + this.state.myStateValue);
    }

    render() {
        return <h2 className={styles.title}>
            State component: {this.state.myStateValue}
            <StateChild callback={this.needMoney} />
        </h2>
    }
}