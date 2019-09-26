import React from 'react';
import { CircularProgress } from '@material-ui/core';

export default class Detail extends React.Component {
  state = {
    pokemon: null,
    error: null
  }

  getTypes = (types) => {
    if(types.length > 1) {
      return types.reduce((previous, current) => previous.type.name + ', ' + current.type.name);
    }

    return types[0].type.name;
  }

  render() {

    if (this.state.error) {
      return <h1>Pokemon not found</h1>;
    }

    if (this.state.pokemon === null) {
      return <CircularProgress />;
    }

    const {pokemon} = this.state;

    const idStr = pokemon.id.toString();
    const pIdStr = '000'.substring(0, 3 - idStr.length) + idStr

    return <div key={idStr}>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pIdStr}.png`} alt="test"></img>
      <br />
      ID: {pokemon.id}
      <br />
      Name: {pokemon.name}
      <br />
      Types: {this.getTypes(pokemon.types)}

    </div>
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(jsonData => this.setState({pokemon: jsonData}))
      .catch(error => this.setState({error}))
  }
}
