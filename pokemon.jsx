import { useState, useEffect } from "react";
import { PokemonCards } from "./pokemonCards";

export const PokemonProject = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); // Set default to an empty string
  const [loadingDots, setLoadingDots] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=35";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      // Fetch details for each Pokémon
      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });

      // Wait for all Pokémon details to be fetched
      const detailedResponseData = await Promise.all(detailedPokemonData);

      // Set state with detailed Pokémon data
      setPokemon(detailedResponseData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // Dots animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prevDots) =>
        prevDots.length < 3 ? prevDots + "." : ""
      );
    }, 400);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Ensure searchData filters correctly even when search is empty
  const searchData = pokemon.filter((currData) =>
    currData.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <p className="text-7xl text-white">Loading Pokémon Data{loadingDots}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <p className="text-7xl text-white text-center">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 min-h-screen flex flex-col items-center justify-start py-10">
        <header className="mb-8">
          <h1 className="text-8xl font-bold text-white">
            Let’s Catch Pokémon!
          </h1>
        </header>
        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Pokémon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-[43px] w-[295px] px-4 py-2 rounded-lg text-2xl  focus:bg-gray-600 focus:text-white focus:outline-none border-b-4 border-black"
          />
        </div>
        {/* Pokémon Cards */}
        <div className="p-6 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {searchData.length > 0 ? (
            searchData.map((currPokemon) => (
              <PokemonCards key={currPokemon.id} PokemonData={currPokemon} />
            ))
          ) : (
            // Message when no Pokémon match the search
            <div className="text-white text-7xl font-bold col-span-full text-center mt-56">
              No such Pokémon available!
            </div>
          )}
        </div>
      </section>
    </>
  );
};
