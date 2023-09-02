import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import HeaderPokemons from "../layout/HeaderPokemons";

const PrivateRoutes = () => {
  const { name } = useSelector((store) => store.trainer);

  if (name)
    return (
      <HeaderPokemons>
        <Outlet />
      </HeaderPokemons>
    );

  return <Navigate to={"/"} />;
};
export default PrivateRoutes;
