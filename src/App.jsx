import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Products, Links, AboutUs, Contacts } from "./pages/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </>
  );
};

export default App;
