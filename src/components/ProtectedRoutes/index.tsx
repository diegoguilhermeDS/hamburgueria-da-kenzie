import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/userContext";


export const ProtectedRoutes = () => {
  const { products, loadingPage } = useContext(UserContext);


  if (loadingPage) {
    return null;
  }

  return products.length > 0 ? <Outlet/> : <Navigate to={"/"} />;
};
