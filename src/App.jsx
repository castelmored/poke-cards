import pokeLogo from "./assets/pokemon_logo.png";
import pokeBg from "./assets/pokemon_bg.jpg";
import pokemonData from "../pokemonapi.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState(pokemonData.results);
  console.log(pokemonList);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  console.log(selectedPokemon);
  const [searchPokemon, setSearchPokemon] = useState("");
  // const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  const showPokemon = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    setSelectedPokemon(data);
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchPokemon(searchTerm);
    showPokemon(searchTerm);
  };

  return (
    <>
      <div className="w-full bg-no-repeat bg-cover h-screen overflow-y-auto relative">
        {/* Background Image */}
        <div className="w-full h-full absolute">
          <img
            src={pokeBg}
            alt="Background image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header Section */}
        <header className="relative top-4 flex flex-col items-center z-10 space-y-10">
          <img src={pokeLogo} alt="Pokemon Logo" className="w-80 h-auto" />
          <input
            value={searchPokemon}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Pokémon name"
            className=" w-3/4 max-w-md p-4 rounded-lg shadow-lg text-lg outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </header>

        {/* Main Content */}
        <main className="relative flex flex-col items-center mt-16 space-y-8 z-10">
          {/* Empty/Selected Pokemon Card */}
          <div className="w-3/4 max-w-md p-6 bg-white rounded-lg shadow-lg border-2 border-gray-300 flex flex-col items-center space-y-4">
            {selectedPokemon ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 capitalize">
                  {selectedPokemon.name}
                </h2>
                <img
                  src={selectedPokemon.sprites.front_default}
                  alt={selectedPokemon.name}
                  className="w-32 h-32"
                />
              </>
            ) : (
              <p className="text-lg text-gray-500">
                Select a Pokémon to view details
              </p>
            )}
          </div>

          {/* Scrollable Pokemon List */}
          <ul className="w-3/4 max-w-md h-96 overflow-y-scroll bg-white shadow-lg rounded-lg p-4 space-y-2">
            {pokemonList.map((pokemon) => (
              <li
                key={pokemon.name}
                className="py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                onClick={() => showPokemon(pokemon.url)}
              >
                <a className="text-lg font-medium text-gray-700 hover:underline">
                  {pokemon.name}
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
