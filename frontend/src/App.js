import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetails from "./pages/ProductDetails";
import ProductCategory from "./pages/ProductCategory";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Private from "./components/Private";
import ShippingScreen from "./pages/ShippingScreen";
import PrivateCartEmpty from "./components/PrivateCartEmpty";
import CheckoutScreen from "./pages/CheckoutScreen";
import PrivateShippingEmpty from "./components/PrivateShippingEmpty";
import OrderSuccessPage from "./pages/OrderSuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          exact
          path="/products/:category"
          element={<ProductCategory />}
        ></Route>
        <Route exact path="/products" element={<ProductList />}></Route>

        <Route exact path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/cart" element={<ShoppingCart />}></Route>

        <Route path="" element={<Private />}>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="" element={<PrivateCartEmpty />}>
            <Route path="/shipping" element={<ShippingScreen />}></Route>
            <Route path="" element={<PrivateShippingEmpty />}>
              <Route path="/checkout" element={<CheckoutScreen />}></Route>
              <Route path="/success" element={<OrderSuccessPage />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
