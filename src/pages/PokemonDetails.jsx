import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonId } from "../services/pokemons";

import PokemonStatBar from "../components/pokemonDetails/PokemonStatBar";
import PokemonMoves from "../components/pokemonDetails/PokemonMoves";
import { bgStylePokemonType } from "../shared/pokemonStyles";
import PokemonInfo from "../components/pokemonDetails/PokemonInfo";

const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pokemons");
  };

  useEffect(() => {
    getPokemonId(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex flex-col justify-center items-center px-4 font-inter">
      <article className="w-[min(100%,_1000px)]">
        <section className="shadow-2xl">
          <div
            className="flex justify-center items-center cursor-pointer mb-14 mt-5 bg-[#FE1936] shadow-2xl p-3 w-[120px] h-[30px]  rounded-3xl text-white"
            onClick={handleBack}
          >
            <i className="bx bx-arrow-back"> Back</i>
          </div>
          <header
            className={`h-[70px] relative mb-8  ${
              bgStylePokemonType[pokemonData?.types[0]]
            }`}
          >
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 h-[120px] aspect-square">
              <img
                className="h-full w-full object-contain"
                src={
                  pokemonData?.image === null
                    ? pokemonData?.image2
                    : pokemonData?.image
                }
                alt=""
              />
            </div>
          </header>
          <PokemonInfo pokemonData={pokemonData} />
          <PokemonStatBar stats={pokemonData?.stats} />
        </section>
        <PokemonMoves moves={pokemonData?.moves} />
      </article>
    </main>
  );
};

export default PokemonDetails;
