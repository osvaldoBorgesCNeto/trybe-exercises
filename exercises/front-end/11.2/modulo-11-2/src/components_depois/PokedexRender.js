import React from 'react';
import data from './data'
import Pokedex from './Pokedex';
import './PokedexRender.css';

class PokedexRender extends React.Component {
  render() {
    return (
      <div className='pokedex'>
        <h1>POKEMON</h1>
        <Pokedex pokemons={ data } />
      </div>
    )
  }
}

export default PokedexRender;