import React, {Component} from 'react';
import styles from './styles.module.css';

export class State extends Component {
    state = {
        myStateValue: 'test value'
    }

    render() {
        return <h2 className={styles.title}>State component: {this.state.myStateValue}</h2>
    }
}