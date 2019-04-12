import React, {Component} from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { setNickname } from '../../actions';
import CircularProgress from '@material-ui/core/CircularProgress';

export class _Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.nickname,
            isSaving: false,
            isEditing: false
        }
    }

    handleChange = (evt) => {
        this.setState({
            value: evt.target.value,
            isEditing: true
        })
    }

    handleSave = () => {
        this.setState({
            isSaving: true
        })

        fetch('https://lfdantoni.herokuapp.com/api/settings/'+this.props.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.props.email,
                nickname: this.state.value
            })
        })
        .then((resp) => resp.json())
        .then((data) => {
            this.props.setNickname(this.state.value);
            this.setState({ isSaving: false });
        })
    }

    componentDidUpdate() {
        if(this.props.nickname != this.state.value && !this.state.isSaving && !this.state.isEditing) {
            this.setState({ value: this.props.nickname });
        }
    }

    render() {
        return <div>
            <div>Email: {this.props.email}</div>
            <TextField disabled={this.state.isSaving} value={this.state.value} onChange={this.handleChange} label={'Nickname'} />
            {!this.state.isSaving ? 
                <Button  variant="outlined" color="primary" onClick={this.handleSave}>Save</Button> :
                <CircularProgress />
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        nickname: state.settings.nickname,
        email: state.settings.email,
        id: state.settings.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNickname: (nickname) => dispatch(setNickname(nickname))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(_Settings)