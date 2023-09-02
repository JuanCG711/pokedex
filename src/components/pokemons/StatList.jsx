import PokemonStats from "./PokemonStats";

const StatList = ({ stats, pokemonInfo }) => {
  return (
    <ul className="grid grid-cols-3 p-3 gap-3">
      {stats?.map((stat) => (
        <PokemonStats key={stat.name} stat={stat} pokemonInfo={pokemonInfo}/>
      ))}
    </ul>
  );
};
export default StatList;
