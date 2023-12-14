
function NavBar({pokemonIndex, setPokemonIndex, totalPokemon}) {

    function prevClick () {
      setPokemonIndex((index) => (index > 0 ? index - 1 : 0))
    }
    function nextClick () {
      setPokemonIndex((index) => (index < totalPokemon - 1 ? index + 1 : index))
    }

return (
    <nav>
        <input type="button" value="Précédent" onClick={prevClick}/>
        <input type="button" value="Suivant" onClick={nextClick}/>
    </nav>
)}

export default NavBar