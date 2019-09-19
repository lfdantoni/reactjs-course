import React from 'react';
import data from '../../mock';

export default function Detail({match}) {
  const pokemons = data.filter(pok => pok.id.toString() === match.params.id.toString());

  if (pokemons.length === 0) {
    return <h1>Pokemon not found</h1>
  }

  const pokemon = pokemons[0];

  const idStr = pokemon.id.toString();
  const pIdStr = '000'.substring(0, 3 - idStr.length) + idStr

  return (<div>
    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pIdStr}.png`} alt="test"></img>
    <br />
    ID: {pokemon.id}
    <br />
    Name: {pokemon.name}
    <br />
    Types: {pokemon.typeList.join(', ')}

  </div>)
}
