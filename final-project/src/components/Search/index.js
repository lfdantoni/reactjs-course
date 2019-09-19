import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Search extends React.Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState(
      {value: event.target.value},
      () => this.props.onChange(this.state.value));
  }

  render() {
    return  <TextField
      id="pokemon-search"
      label="Search by id or name"
      value={this.state.name}
      onChange={this.handleChange}
      margin="normal"
      style={this.props.style}
    />
  }

}
