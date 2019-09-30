import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { getPokemonDetail, getPokemonDetailSuccess, getPokemonDetailFail } from '../../actions';
import {connect} from 'react-redux';

class Detail extends React.PureComponent {
  getTypes = (types) => {
    if(types.length > 1) {
      return types.reduce((previous, current) => previous.type.name + ', ' + current.type.name);
    }

    return types[0].type.name;
  }

  render() {

    if (this.props.error) {
      return <h1>Pokemon not found</h1>;
    }

    if (!this.props.pokemon) {
      return <CircularProgress />;
    }

    const {pokemon} = this.props;

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
    this.props.getPokemonDetail(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if(this.props.id === prevProps.id) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
      .then(resp => resp.json())
      .then(jsonData => this.props.getPokemonDetailSuccess(jsonData))
      .catch(error => this.props.getPokemonDetailFail(error))
  }
}


const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemons.detail,
    loading: state.pokemons.loading,
    error: state.pokemons.error,
    id: state.pokemons.detailId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonDetail: (id) => dispatch(getPokemonDetail(id)),
    getPokemonDetailSuccess: (detail) => dispatch(getPokemonDetailSuccess(detail)),
    getPokemonDetailFail: (error) => dispatch(getPokemonDetailFail(error)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
