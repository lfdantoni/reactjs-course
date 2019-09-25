import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../../actions';
import Todo from './Todo';

class TodoListContainer extends React.Component {
    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    }

    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.addTodo(this.state.value);
            this.setState({value: ''});
        } 
    }

    render() {
        return <Fragment>
            {this.props.user.name} - {this.props.user.email} <br />
            
            <input value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} type="text" />

            {this.props.todos.map(t => <Todo key={t.id} todo={t}/>)}
        </Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (description) => dispatch(addTodo(description))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)

