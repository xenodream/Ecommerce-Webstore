import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateShippingEmpty = () => {
  const { shipping } = useSelector((state) => state.shipping);

  return shipping != null ? <Outlet /> : <Navigate to="/shipping" replace />;
};

export default PrivateShippingEmpty;
