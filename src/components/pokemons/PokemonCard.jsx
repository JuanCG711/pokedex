import { useEffect, useState } from "react";
import { getPokemonUrl, joinPokemonTypes } from "../../services/pokemons";
import StatList from "./StatList";
import {
  bgStylePokemonType,
  bgText,
  borderStylePokemonType,
} from "../../shared/pokemonStyles";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);



  return (
    <Link
      to={`/pokemons/${pokemonInfo?.id}`}
      className={` mb-10 text-center rounded-lg border-[5px] ${
        borderStylePokemonType[pokemonInfo?.types[0]]
      }`}
    >
      <header
        className={`h-[80px] relative mb-8 ${
          bgStylePokemonType[pokemonInfo?.types[0]]
        }`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] aspect-square">
          <img
            className="h-full w-full object-contain"
            src={pokemonInfo?.image === null ? pokemonInfo?.image2 : pokemonInfo?.image}
            alt=""
          />
        </div>
      </header>
      <section>
        <div className="capitalize mb-4">
          <h3 className={`text-xl font-bold ${bgText[pokemonInfo?.types[0]]}`}>{pokemonInfo?.name}</h3>
          <h4 className="text-lg">{joinPokemonTypes(pokemonInfo?.types)}</h4>
          <h5 className="text-sm text-[#9F9F9F]">Types</h5>
        </div>
        <hr />
        <StatList stats={pokemonInfo?.stats} pokemonInfo={pokemonInfo} />
      </section>
    </Link>
  );
};
export default PokemonCard;
