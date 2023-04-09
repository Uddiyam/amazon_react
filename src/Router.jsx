import { Routes, Route } from "react-router-dom";
import App from "./App";
import AllProduct from "./pages/AllProduct";
import Mobile from "./pages/Mobile";
import Prime from "./pages/Prime";
import Computers from "./pages/Computers";
import Pantry from "./pages/Pantry";
import Electronics from "./pages/Electronics";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Deal from "./pages/Deal";

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<App />}></Route>
      <Route path="/All" exact element={<AllProduct />}></Route>
      <Route path="/Mobile" exact element={<Mobile />}></Route>
      <Route path="/Prime" exact element={<Prime />}></Route>
      <Route path="/Computers" exact element={<Computers />}></Route>
      <Route path="/Pantry" exact element={<Pantry />}></Route>
      <Route path="/Electronics" exact element={<Electronics />}></Route>
      <Route path="/Login" exact element={<Login />}></Route>
      <Route path="/Order" exact element={<Order />}></Route>
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Deal" element={<Deal />} />
    </Routes>
  );
}
