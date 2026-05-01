
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Navbar from "./components/navbar";
import Cart from "./pages/cart"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;