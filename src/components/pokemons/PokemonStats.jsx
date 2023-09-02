import { bgText } from "../../shared/pokemonStyles"

const PokemonStats = ({stat, pokemonInfo}) => {
  return (
    <li className="uppercase">
        <h5 className="line-clamp-1 text-[#9F9F9F] text-sm">{stat.name}</h5>
        <h4 className={`font-bold ${bgText[pokemonInfo?.types[0]]}`}>{stat.value}</h4>
    </li>
  )
}
export default PokemonStats