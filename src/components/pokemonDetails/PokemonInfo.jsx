import { bgStylePokemonType, bgText } from "../../shared/pokemonStyles";

const PokemonInfo = ({ pokemonData }) => {
  return (
    <article className="grid grid-cols-1 gap-2">
      <section className="flex flex-col justify-center items-center gap-4">
        <h4
          className={`border-[1px] border-[#D3D3D3] w-[25px] right-1/2 text-base font-bold px-1 ${
            bgText[pokemonData?.types[0]]
          }`}
        >
          #{pokemonData?.id}
        </h4>
        <section className="flex justify-center items-center">
          <div>
            <img src="/images/image5.png" alt="" />
          </div>
          <h3
            className={`px-2 font-semibold text-2xl capitalize ${
              bgText[pokemonData?.types[0]]
            }`}
          >
            {pokemonData?.name}
          </h3>
          <div>
            <img src="/images/image5.png" alt="" />
          </div>
        </section>
        <section className="flex gap-6 text-xs mb-4">
          <div className="flex flex-col justify-center items-center ">
            <span>Weight</span>
            <span className="font-bold">{pokemonData?.weight}</span>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <span>Height</span>
            <span className="font-bold">{pokemonData?.height}</span>
          </div>
        </section>
      </section>
      <section className="flex justify-center items-center gap-[1px] mb-6 sm:gap-[40px]">
        <div className="flex flex-col items-center justify-center">
          <span className="mb-4 font-medium">Type</span>
          <div className="flex gap-[1px] sm:gap-[20px]">
            <span
              className={` py-1 px-2 text-sm sm:px-9 ${
                bgStylePokemonType[pokemonData?.types[0]]
              }`}
            >
              {pokemonData?.types[0]}
            </span>
            <span
              className={`py-1 px-2 text-sm sm:px-9 ${
                bgStylePokemonType[pokemonData?.types[1]]
              }`}
            >
              {pokemonData?.types[1]}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="mb-4 font-medium">Abilities</span>
          <div className="flex gap-[1px] sm:gap-[20px]">
            <span
              className="border-[1px] py-1 px-2 text-sm font-medium sm:px-9"
            >
              {pokemonData?.abilities[0].ability.name}
            </span>
            <span className="border-[1px] py-1 px-2 text-sm font-medium sm:px-9">
              {pokemonData?.abilities[1].ability.name}
            </span>
          </div>
        </div>
      </section>
    </article>
  );
};
export default PokemonInfo;
