import React, { useState } from 'react'
import { colors } from './pokemon-type-color'
import PokemonDetailsModal from './PokemonDetailsModal'

export default function PokemonInfoCard(
  {
    id,
    name,
    image,
    types,
    stats,
    height,
    weight,
    appearanceInGames
  }) {
  
  const [ modalIsOpen, setModalIsOpen] = useState(false);

  return (
    //use the first type of each pokemon to set the background color by searching the name in 'colors'
    <>
      <div className='card' style={{
        //TODO create variable for color
        backgroundColor: colors[types[0].type.name]}} onClick={() => setModalIsOpen(true)}>
        <p className='id'>#{id}</p>
        <div className='img-container'>
          <img src={image} alt={name}/>
        </div>
        <p className='name'>{name.toUpperCase() }</p>
        <p className='info'>Weight: {(weight*0.1).toFixed(2)}kg</p>
        <p className='info'>Height: {height*10}cm</p>
        <p className='info'>Type: {types.map((e, index) => {
          //add "/" after each element except for the last one (index=false)
            return (
              <span className='pokemonType' style={{backgroundColor: colors[e.type.name]}} key={index}>
                {e.type.name} 
              </span>
            )
          })}</p>
      </div>
      <PokemonDetailsModal open={modalIsOpen} onClose={() => setModalIsOpen(false)} 
        id={id}
        name={name}
        image={image}
        types={types}
        stats={stats}
        height={height}
        weight={weight} 
        appearanceInGames={appearanceInGames}
      />
    </>
  )
}