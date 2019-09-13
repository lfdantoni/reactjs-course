import React, {Component} from 'react';
import './styles.css';

export class State extends Component {
    state = {
        myStateValue: 'test value'
    }

    render() {
        return <h2 className="title">State component: {this.state.myStateValue}</h2>
    }
}