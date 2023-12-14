import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
    {
      name: "mew",
    },
  ];
  
  const [pokemonIndex, setPokemonIndex]  = useState(0);
  console.log(pokemonIndex)

  function prevClick () {
    setPokemonIndex((index) => (index > 0 ? index - 1 : 0))
  }
  function nextClick () {
    setPokemonIndex((index) => (index < pokemonList.length - 1 ? index + 1 : index))
  }

  return (

      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <input type="button" value="Précédent" onClick={prevClick}/>
        <input type="button" value="Suivant" onClick={nextClick}/>
      </div>
  )
}

export default App;

