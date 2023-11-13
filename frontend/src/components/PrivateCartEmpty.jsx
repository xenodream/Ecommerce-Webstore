import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateCartEmpty = () => {
  const { cart } = useSelector((state) => state.cart);

  return cart.length != 0 ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateCartEmpty;
