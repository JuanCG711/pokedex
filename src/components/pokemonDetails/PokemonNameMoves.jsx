const PokemonNameMoves = ({ move }) => {
  return (
    <section className="flex justify-center items-center bg-[#E5E5E5] m-3 w-fit rounded-3xl">
      <div className="mx-2 my-1 text-center">{move.name}</div>
    </section>
  );
};
export default PokemonNameMoves;
