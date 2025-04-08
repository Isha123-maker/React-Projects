export const PokemonCards = ({ PokemonData }) => {
  const imageUrl =
    PokemonData.sprites?.other?.dream_world?.front_default ||
    PokemonData.sprites?.front_default ||
    "https://via.placeholder.com/150";

  return (
    <li className="flex flex-col w-[300px] h-[370px] items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
      {/* Pokémon Image */}
      <figure className="mb-4 bg-gradient-to-r from-lime-400 via-green-300 to-green-400 w-[200px] h-[147px] rounded-md">
        <img
          src={imageUrl}
          alt={PokemonData.name || "Pokemon"}
          className="w-44 h-44 mx-auto"
        />
      </figure>

      {/* Pokémon Name */}
      <h1 className="text-4xl font-bold capitalize text-black text-center mb-2">
        {PokemonData.name || "Unknown Pokémon"}
      </h1>

      {/* Type Badge */}
      <div className="flex justify-center  m-4">
        <span className="bg-green-500 w-48 h-12 text-white text-wrap text-center text-2xl font-medium px-3 py-1 rounded-2xl shadow-lg">
          {PokemonData.types.map((currType) => currType.type.name).join(",")}
        </span>
      </div>

      {/* Additional Info */}
      <div className="flex flex-row  m-8 w-full">
        {/* Row 1 */}
        <div>
          <p className="font-bold text-black text-2xl pr-4">Height: 
          <span className="font-bold text-gray-500 text-2xl text-center">{PokemonData.height}</span>
          </p>
        </div>
        <div>
          <p className="font-bold text-black text-2xl pr-4">Weight:
            <span className="font-bold text-gray-500 text-2xl text-center">{PokemonData.weight}</span>
          </p>
        </div>
        <div>
          <p className="font-bold text-black text-2xl">Speed:
            <span className="font-bold text-gray-500 text-2xl text-center">{PokemonData.stats[5]?.base_stat || "N/A"}</span>
          </p>
        </div>
      </div>
       {/* Row 2 */}
      <div className="flex flex-row m-4 w-full">
       
        <div>
          <p className="font-bold text-black text-2xl pr-5">Experience:</p>
          <p className="font-bold text-gray-500 text-2xl text-center pr-6">{PokemonData.base_experience}</p>
        </div>
        <div>
          <p className="font-bold text-black text-2xl pr-5">Attack:</p>
          <p className="font-bold text-gray-500 text-2xl text-center pr-6">{PokemonData.stats[1]?.base_stat || "N/A"}</p>
        </div>
        <div>
          <p className="font-bold text-black text-2xl">Abilities:</p>
          <p className="font-bold text-gray-500 text-2xl text-center">
            {PokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
        </div>
      </div>
    </li>
  );
};
