import React, {Component} from 'react';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';


export class _RichInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    handleChange = (evt) => {
        this.setState({
            value: evt.target.value
        })
    }

    render() {
        return <div>
            <TextField value={this.state.value} onChange={this.handleChange}
                label={'Message'}
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        // Do code here
                        ev.preventDefault();
                        this.props.sendMessage(this.state.value, this.props.nickname);
                        this.setState({
                            value: ''
                        })
                    }
                }} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        sendMessage: state.socket.sendMessage,
        nickname: state.settings.nickname,
    }
}

export default connect(mapStateToProps)(_RichInput)