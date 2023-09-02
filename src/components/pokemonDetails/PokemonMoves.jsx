import PokemonNameMoves from "./PokemonNameMoves";

const PokemonMoves = ({ moves }) => {

    const newMoves = moves?.slice(0,20)

  return (
    <article className="shadow-2xl p-4 mb-6">
      <h2 className="text-3xl">Movements</h2>
      <section className="grid grid-cols-3 ">
        {newMoves?.map(( move ) => (
          <PokemonNameMoves key={move.move.url} move={move.move} />
        ))}
      </section>
    </article>
  );
};
export default PokemonMoves;
