import React from 'react';
import PokemonCard from '../PokemonCard';
import Search from '../Search';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';

const useStyles = {
  root: {
    flexGrow: 1
  },
  search: {
    width: '80%',
    minWidth: '300px',
  }
}

export default class ListCards extends React.Component {
  state = {
    pokemon: '',
    loading: false,
    pokemons: [],
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
    const pokemonsFiltered = this.state.pokemons
      .filter(
        pokemon =>
          this.state.pokemon &&
          ( pokemon.id === this.state.pokemon ||
            pokemon.name.toLowerCase().indexOf(this.state.pokemon.toLowerCase()) >= 0));

    this.setState({pokemonsFiltered, loading: false});
  }

  onChange = (value) => {
    this.setState({ pokemon: value, loading: true }, () => this.filter());
  }

  render() {
    return (
      <div style={useStyles.root}>
        {this.state.loading ? 
          <CircularProgress /> :
          this.showList()}
      </div>)
  }

  componentDidMount() {
    this.setState({loading: true},
      () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
        .then(resp => resp.json())
        .then(jsonData => {
          jsonData.results.forEach(elem => elem.id = elem.url.match(/\/(\d+)\//)[0].replace(/\//gi,''))
          this.setState({pokemons: jsonData.results, loading: false})
        });
      })
  }
}
