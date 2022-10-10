import { useState } from 'react';
import ReactDom from 'react-dom'
import { colors } from './pokemon-type-color'

import balance from '../images/balance.png'
import ruler from '../images/ruler.png'
import earth from '../images/earth.png'
import gameBoy from '../images/game-boy.png'
import gender from '../images/gender.png'
import setAllPokemons from "../App"

export default function PokemonDetails(
  { 
    open, 
    onClose,

    id,
    name,
    image,
    types,
    stats,
    height,
    weight,
    appearanceInGames
  }) {
  
  // TODO add function to get data about pokemon species
  const speciesData = async () => {
    const [speciesData, setSpeciesData] = useState([]);
    //get data from API
    const respond = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
    );
    const data = await respond.json();
    //extract data
    const speciesDescription = data.flavor_text_entries[0].flavor_text;
    const habitat = data.habitat.name;
    const hasVisualGenderDifference = data.has_gender_differences;

    //setAllPokemons((currentList) => [...currentList, data]);
    //***PROBLEM***
    // speciesData is empty why???
    setSpeciesData(data);


   // return console.log(habitat);
   /*setSpeciesData({
     name: name,
     description: speciesDescription,
     habitat: habitat,
     genderDifference: hasVisualGenderDifference
   }); */
  }

  //return null if modal is closed
  if (!open) return null
 
 // console.log(allPokemons);


  const pokemonTypeColor = colors[types[0].type.name];
 // console.log(types[0].type.name);
  

    return ReactDom.createPortal(
      <>
        <div className='backdrop' onClick={onClose}></div>
        <div className='pokemon-details' style={{backgroundColor: pokemonTypeColor}}>
            <button className='close-modal-button' onClick={onClose}>X</button>
            <p className='id'>#{id}</p>
            <p className='name'>{name.toUpperCase() }</p>
            <p className='info'>Description: <i>{speciesData}</i></p>
          <div className='info-container'> 
            <div className='info-block'>
              <div className='info-title'>Weight</div>
              <div className='info-icon'>
                <img src={balance} alt="balance icon" />
              </div>
              <div className='info-value'>{(weight*0.1).toFixed(2)}kg</div>
            </div>

            <div className='info-block'>
              <div className='info-title'>Height</div>
              <div className='info-icon'>
                <img src={ruler} className='ruler-icon' alt="ruler icon" />
              </div>
              <div className='info-value'>{height*10}cm</div>
            </div>

            <div className='info-block'>
              <div className='info-title'>Type</div>
              <br/><br/>
              <div className='info-value'>
                <p className='info'>{types.map((e, index) => {
                //add "/" after each element except for the last one (index=false)
                  return (
                    <span className='pokemonType' style={{backgroundColor: colors[e.type.name]}} key={index}>
                      {e.type.name} 
                    </span>
                  )
                })}</p>
              </div>
            </div>

            <div className='info-block'>
              <div className='info-title'>Habitat</div>
              <div className='info-icon'>
                <img src={earth} alt="earth icon" />
              </div>
              <div className='info-value'>Urban</div>
            </div>
          
            <div className='info-block'>
              <div className='info-title'>Visual Gender Difference</div>
              <div className='info-icon'>
                <img src={gender} alt="gender icon" />
              </div>
              <div className='info-value'>Yes</div>
            </div>

            

            <div className='info-block'>
              <div className='info-title'>Appearance in Games</div>
              <div className='info-icon'>
                <img src={gameBoy} alt="Game Boy icon" />
              </div>
              <div className='info-value'>{appearanceInGames.length} / 39</div>
            </div>

            <div className='modal-img-container'>
              <img src={
                //create interchangeablwe / sprites image with button
                image} alt={name}/>       
            </div>
          </div>
        </div>
      </>,
      document.getElementById('portal')
    );
}
