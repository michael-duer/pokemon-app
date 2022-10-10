import { useState, useEffect } from 'react';
import PokemonInfoCard from './components/PokemonInfoCard';

import Footer from './components/Footer'
import pokeball from './images/pokeball.png'
import ScrollToTopButton from './components/ScrollToTopButton';

//
// TODO ADD DOCUMENTATION AND THOUGHTS
//


function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPokemon, setloadPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const [loading, setLoading] = useState(true)

  const getAllPokemons = async () => {
    const respond = await fetch(loadPokemon);
    const data = await respond.json();
    // set state to prepare for loading the next 20 pokemons 
    setloadPokemon(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const respond = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await respond.json();
        // getSpeciesData(pokemon.name) and add info to list
        setAllPokemons((currentList) => [...currentList, data]);
      });
    } 

    createPokemonObject(data.results);
   // console.log("heeee");
   // await console.log(allPokemons);
  };
  useEffect(() => {
    //add loading indicator
    setLoading(true)
    getAllPokemons();
    //remove after loading
    setLoading(false)
  }, []);

  if (loading) return "Loading..."
 
  return (
    <>
      <h1>Pokémon list <img className='pokeball-icon' src={pokeball} alt="pokeball" /> </h1>
      <p className='subtitle'>Click the ball to draw a random pokemon!</p>
      <div className='card-container'>
        {allPokemons.map((pokemon, index) => (
          <PokemonInfoCard key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types}
            stats={pokemon.stats}
            height={pokemon.height}
            weight={pokemon.weight} 
            appearanceInGames={pokemon.game_indices}
          />
        ))}
      </div>
      <button className="load-more-btn" 
        onClick={() => getAllPokemons()}>
        Load more
      </button>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
