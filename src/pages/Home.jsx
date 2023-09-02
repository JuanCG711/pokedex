import { useDispatch } from "react-redux";
import FooterHome from "../components/layout/FooterHome";
import { loginTrainer } from "../store/slice/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokemons");
  };

  return (
    <main className=" font-inter min-h-screen grid grid-rows-[1fr_auto]">
      <section className="flex flex-col items-center justify-center">
        <article className="flex flex-col items-center justify-center">
          <div className="px-4">
            <img  src="/images/image1.png" alt="" />
          </div>
          <div className="mb-10 mt-10">
            <h2 className="font-extrabold text-[#FE1936] text-2xl">
              ¡Hello trainer!
            </h2>
            <p className="text-base">To start give your name</p>
          </div>

          <form className="w-[280px] flex justify-stretch" onSubmit={handleSubmit}>
            <input
              className="focus:outline-none shadow-lg p-2"
              autoComplete="off"
              placeholder="Your name..."
              id="nameTrainer"
              type="text"
              required
            />
            <button className="bg-[#D93F3F] text-white px-6 py-2">Start</button>
          </form>
        </article>
      </section>
      <FooterHome />
    </main>
  );
};
export default Home;
