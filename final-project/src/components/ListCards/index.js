import React from 'react';
import data from '../../mock';
import PokemonCard from '../PokemonCard';
import Search from '../Search';
import Grid from '@material-ui/core/Grid';

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
    pokemon: ''
  }

  onChange = (value) => {
    this.setState({ pokemon: value })
  }

  render() {
    return (
      <div style={useStyles.root}>
        <Search onChange={this.onChange} style={useStyles.search} />
        <Grid container spacing={3}>
          {
            data
              .filter(
                pokemon =>
                  this.state.pokemon &&
                  ( pokemon.id.toString() === this.state.pokemon ||
                    pokemon.name.toLowerCase().indexOf(this.state.pokemon.toLowerCase()) >= 0))
              .map(elem => (
                <Grid item xs={3} key={elem.id}>
                  <PokemonCard data={elem}/>
                </Grid>))
          }
        </Grid>
      </div>)
  }
}
