import { useState } from "react";
import PokemonList from "../components/pokemons/PokemonList";
import PokemonSelect from "../components/pokemons/PokemonSelect";
import usePokedes from "../hook/usePokedes";
import { PaginateData } from "../utils/pagination";
import Pagination from "../components/pokemons/Pagination";
import { useDispatch } from "react-redux";
import { logout } from "../store/slice/trainer.slice";

const Pokemons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const {
    name,
    pokemonName,
    pokemonByname,
    pokemonType,
    setPokemonName,
    setPokemonType,
    handleChange,
    types,
  } = usePokedes();

  const handleLogout = () => {
    dispatch(logout());
  };

  const { PagesInCurrentBlock, lastPage, itemInCurrentPage } = PaginateData(
    pokemonByname,
    currentPage
  );

  return (
    <main className="sm:px-8 lg:px-20 ">
      <section className="px-4 mb-20">
        <div className="mb-10 mt-6 cursor-pointer bg-[#FE1936] shadow-2xl p-4 w-[120px] rounded-3xl text-white" onClick={handleLogout}>
          <i className="bx bx-home"> Logout</i>
        </div>
        <p className="mb-5">
          <span className="text-[#FE1936] font-extrabold">Welcome {name},</span> Here
          you can find your favorite Pokémon
        </p>
        <form className="flex flex-col gap-5 sm:flex sm:flex-row">
          <div>
            <input
              className="focus:outline-none shadow-lg p-3 w-full"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
          </div>
          <select className="cursor-pointer shadow-lg p-3 w-full" value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            {types.map((type) => (
              <PokemonSelect type={type} key={type.url} />
            ))}
          </select>
        </form>
      </section>
      <PokemonList pokemons={itemInCurrentPage} />
      <Pagination
        PagesInCurrentBlock={PagesInCurrentBlock}
        lastPage={lastPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};
export default Pokemons;
