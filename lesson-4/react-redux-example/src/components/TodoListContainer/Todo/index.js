import React from 'react';

export default class Todo extends React.PureComponent {
    render() {
        const {id, description, state} = this.props.todo;

        return <div>
            Id: {id} - Desc: {description} - Status: {state}
        </div>
    }
}