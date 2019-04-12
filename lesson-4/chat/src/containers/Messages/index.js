import React, {Component} from 'react';
import { connect } from 'react-redux';


export class _Messages extends Component {
    render() {
        return <div style={{height: '300px', overflow: 'auto'}}>
            <h1>Messages</h1>
            {this.props.messages ? 
                this.props.messages.map(m => {
                    const dateStr = new Date(m.time);
                    return <div key={m.time}>
                        {dateStr.toLocaleDateString() + ' - ' + dateStr.toLocaleTimeString() }->
                        {m.nickname}->
                        {m.message}
                    </div>
                }) : null}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(_Messages)