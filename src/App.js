import { useState, useEffect } from 'react';
import PokemonInfoCard from './components/PokemonInfoCard';
import Pagination from './components/Pagination';

import Footer from './components/Footer'
import pokeball from './images/pokeball.png'

//
// TODO ADD DOCUMENTATION AND THOUGHTS
//


function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  const getAllPokemons = async () => {
    const respond = await fetch(currentPageUrl);
    const data = await respond.json();
    setCurrentPageUrl(data.next);
    setNextPageUrl(data.next);
    setPrevPageUrl(data.previous);

    function createPokemonObject(result) {
    result.forEach(async (pokemon) => {
      const respond = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await respond.json();
      setAllPokemons((currentList) => [...currentList, data]);
    });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };
  useEffect(() => {
    //add loading indicator
    setLoading(true)
    getAllPokemons();
    //remove after loading
    setLoading(false)
  }, []);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl.replace("limit=14", "limit=20"))
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl.replace("limit=14", "limit=20"))
  }

  if (loading) return "Loading..."

  return (
    <>
      <h1>Pokémon list <img src={pokeball} alt="pokeball" /> </h1>
      <div className='card-container'>
        {allPokemons.map((pokemon, index) => (
          <PokemonInfoCard 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types}
            key={index}
            height={pokemon.height}
            weight={pokemon.weight} 
          />
        ))}
      </div>
      <Pagination 
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null} 
      />
      <Footer />
    </>
  );
}

export default App;
