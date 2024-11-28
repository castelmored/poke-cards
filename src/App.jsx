import pokeLogo from "./assets/pokemon_logo.png";
import pokeBg from "./assets/pokemon_bg.jpg";
import pokemonData from "../pokemonapi.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState(pokemonData.results);
  // console.log(pokemonList);

  return (
    <>
      <div className="w-full relative bg-no-repeat bg-cover h-screen z-0 overflow-hidden">
        {/* Background Image */}
        <div className="w-full h-full">
          <img
            src={pokeBg}
            alt="Background image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header Section */}
        <header className="absolute top-4 left-0 right-0 flex justify-center">
          <img src={pokeLogo} alt="Pokemon Logo" className="w-80 h-auto" />
        </header>

        {/* Main Section */}
        <main className="absolute top-24 left-0 right-0 flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter Pokémon name"
            className="w-3/4 max-w-md p-4 rounded-lg shadow-lg text-lg outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500 my-20"
          />
        </main>

        {/* Scrollable Pokemon List */}
        <ul className="absolute top-48 left-0 right-0 mx-auto w-3/4 max-w-md h-64 overflow-y-scroll bg-white shadow-lg rounded-lg p-4 space-y-2 my-20">
          {pokemonList.map((pokemon) => (
            <li
              key={pokemon.name}
              className="py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <a
                href="#"
                className="text-lg font-medium text-gray-700 hover:underline"
              >
                {pokemon.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
