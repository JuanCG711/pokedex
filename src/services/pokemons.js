import axios from "axios";

export const getAllPokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(URL);
  return data.results;
};

export const getAllTypes = async () => {
  const url = "https://pokeapi.co/api/v2/type";
  const { data } = await axios.get(url);
  return data.results;
};

export const getPokemonType = async (pokemonType) => {
  const url = `https://pokeapi.co/api/v2/type/${pokemonType}/`;
  const { data } = await axios.get(url);
  const formatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return formatPokemons;
};

export const getPokemonUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    image2: data.sprites.other["official-artwork"].front_default,
  };
  return pokemon;
};

export const getPokemonId = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  const { data } = await axios.get(url);

  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    image2: data.sprites.other["official-artwork"].front_default,
    weight: data.weight,
    height: data.height,
    abilities: data.abilities,
    moves: data.moves,
  };
  return pokemon;
};

const formatStats = (stats) => {
  return stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
};

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

export const joinPokemonTypes = (types = []) => {
  return types.slice(0, 2).join(" / ");
};
