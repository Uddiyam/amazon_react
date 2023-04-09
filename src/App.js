import Header from "./components/Header";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
