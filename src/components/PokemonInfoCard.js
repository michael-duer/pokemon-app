import React, { useState } from 'react'
import { colors } from './pokemon-type-color'

export default function PokemonInfoCard(
  {
    id,
    name,
    image,
    types,
    height,
    weight
  }) {
  
  return (
    //use the first type of each pokemon to set the background color by searching the name in 'colors'
    <div className='card' style={{backgroundColor: colors[types[0].type.name]}}>
      <p className='id'>#{id}</p>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <p className='name'>{name.toUpperCase()}</p>
      <p className='info'>Type: {types.map((e, index) => {
        //add "/" after each element except for the last one (index=false)
          return (
            <span className='pokemonType' style={{backgroundColor: colors[e.type.name]}} key={index}>
              {e.type.name} 
            </span>
          )
        })}</p>
      <p className='info'>Height: {height*10}cm</p>
      <p className='info'>Weight: {(weight*0.1).toFixed(2)}kg</p>
    </div>
  )
}