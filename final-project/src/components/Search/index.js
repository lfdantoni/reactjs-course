import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Search extends React.Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.onChange(this.state.value);
    } 
  }

  render() {
    return  <TextField
      id="pokemon-search"
      label="Search the pokemon by id or name"
      value={this.state.name}
      onChange={this.handleChange}
      onKeyDown={this.handleKeyDown}
      margin="normal"
      style={this.props.style}
    />
  }

}
