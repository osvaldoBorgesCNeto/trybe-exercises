import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokemon-list'>
        {this.props.pokemons.map((pokemon, index) => <Pokemon pokemon={ pokemon }keys={ index }/> )}
      </div>
    )
  }
}

export default Pokedex;