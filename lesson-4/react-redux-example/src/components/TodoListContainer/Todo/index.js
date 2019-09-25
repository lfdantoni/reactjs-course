import React from 'react';

export default class Todo extends React.PureComponent {
    render() {
        const {id, description, status} = this.props.todo;

        return <div>
            Id: {id} - Desc: {description} - Status: {status}
        </div>
    }
}