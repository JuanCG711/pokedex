import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import PokemonDetails from "./pages/PokemonDetails";
import Page404 from "./pages/Page404";
import PrivateRoutes from "./components/auth/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:pokemonId" element={<PokemonDetails />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
