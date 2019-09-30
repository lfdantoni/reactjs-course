import React from 'react';
import PokemonCard from '../PokemonCard';
import Search from '../Search';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';
import {connect} from 'react-redux';
import {getAllPokemons, getAllPokemonsFail, getAllPokemonsSuccess} from '../../actions'

const useStyles = {
  root: {
    flexGrow: 1
  },
  search: {
    width: '80%',
    minWidth: '300px',
  }
}

class CardListComponent extends React.Component {
  state = {
    pokemon: '',
    pokemonsFiltered: []
  }

  showList = () => {
    return <>
      <Search onChange={this.onChange} style={useStyles.search} />
      <Grid container spacing={3}>
        {
          this.state.pokemonsFiltered
            .map(elem => (
              <Grid item xs={6} lg={3} key={elem.name}>
                <PokemonCard data={elem}/>
              </Grid>))
        }
      </Grid>
    </>
  }

  filter = () => {
    const pokemonsFiltered = this.props.pokemons
      .filter(
        pokemon =>
          this.state.pokemon &&
          ( pokemon.id === this.state.pokemon ||
            pokemon.name.toLowerCase().indexOf(this.state.pokemon.toLowerCase()) >= 0));

    this.setState({pokemonsFiltered});
  }

  onChange = (value) => {
    this.setState({ pokemon: value }, () => this.filter());
  }

  render() {
    return (
      <div style={useStyles.root}>
        {this.props.loading ? 
          <CircularProgress /> :
          this.showList()}
      </div>)
  }

  componentDidMount() {
    this.props.getPokemons();

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(resp => resp.json())
      .then(jsonData => {
        jsonData.results.forEach(elem => elem.id = elem.url.match(/\/(\d+)\//)[0].replace(/\//gi,''))
        this.props.getPokemonsSuccess(jsonData.results);
      })
      .catch(error => this.props.getPokemonsFail(error));
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.list,
    loading: state.pokemons.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getAllPokemons()),
    getPokemonsSuccess: (pokemons) => dispatch(getAllPokemonsSuccess(pokemons)),
    getPokemonsFail: (error) => dispatch(getAllPokemonsFail(error)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardListComponent);
