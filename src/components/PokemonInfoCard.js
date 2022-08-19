import React, { useState } from 'react'

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
    <div className='card' key={id}>
      <p className='id'>#{id}</p>
      <img src={image} alt={name} />
      <p className='name'>{name.toUpperCase()}</p>
      <p className='info'>Type: {types.map((e, index) => {
        //add "/" after each element except for the last one (index=false)
          return (index ? " / ":"") + e.type.name})}</p>
      <p className='info'>Height: {height*10}cm</p>
      <p className='info'>Weight: {(weight*0.1).toFixed(2)}kg</p>
    </div>
  )
}