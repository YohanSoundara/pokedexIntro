import PropTypes from "prop-types"

function PokemonCard(props) {
  console.log(props)
    // const pokemon = pokemonList[1]
  return (
        <figure>
            {props.pokemon.imgSrc !== undefined 
            ? (<img src={props.pokemon.imgSrc} />)
            : (<p>???</p>)}
        <figcaption>{props.pokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
pokemon: PropTypes.shape ({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
}).isRequired,
}

export default PokemonCard;


