import React, { useState } from 'react'
import { colors } from './pokemon-type-color'

export default function PokemonInfoCard(
  {
    id,
    name,
    image,
    types,
    stats,
    height,
    weight
  }) {

  return (
    //use the first type of each pokemon to set the background color by searching the name in 'colors'
    <div className='card' style={{backgroundColor: colors[types[0].type.name]}}>
      <p className='id'>#{id}</p>
      <p className='hp'>{stats[0].base_stat} HP</p>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <p className='name'>{name.toUpperCase() }</p>
      <p className='info'>Attack: {stats[1].base_stat}</p>
      <p className='info'>Defense: {stats[2].base_stat}</p>
      <p className='info'>Type: {types.map((e, index) => {
        //add "/" after each element except for the last one (index=false)
          return (
            <span className='pokemonType' style={{backgroundColor: colors[e.type.name]}} key={index}>
              {e.type.name} 
            </span>
          )
        })}</p>
    </div>
  )
}