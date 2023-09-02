import BarProgresPokemon from "./BarProgresPokemon";

const PokemonStatBar = ({ stats }) => {
  return (
    <article className="py-7">
      <section className="flex justify-center items-center gap-2 mb-4">
        <h2 className="text-3xl">Stats</h2>
        <div>
          <img src="/images/image5.png" alt="" />
        </div>
        <div>
          <img src="/images/image6.png" alt="" />
        </div>
      </section>

      <section className="mb-14">
        {stats?.map((stat) => (
          <BarProgresPokemon key={stat.name} stat={stat} />
        ))}
      </section>
    </article>
  );
};
export default PokemonStatBar;
