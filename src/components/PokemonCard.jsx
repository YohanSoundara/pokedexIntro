
function PokemonCard() {
    return (
        <figure>
            {pokemonList[1].imgSrc !== undefined 
            ? (<img src={pokemonList[1].imgSrc} />)
            : (<p>???</p>)}
        <figcaption>{pokemonList[1].name}</figcaption>
        </figure>
    );
}

export default PokemonCard;


const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];