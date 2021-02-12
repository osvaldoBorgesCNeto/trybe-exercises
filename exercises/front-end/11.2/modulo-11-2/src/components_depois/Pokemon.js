import React from 'react';
import './Pokemon.css'

class ListPokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon;

    return (
      <div className='pokemon-card'>
      <div className="pokemon-info">
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ `Average Weight: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
      </div>
          <img src={ image }/>
      </div>
    )
  }
}

export default ListPokemon;