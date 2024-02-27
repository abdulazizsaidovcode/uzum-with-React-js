import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Wishes from "./components/pages/Wishes";
import Cart from "./components/pages/Cart";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Product from "./components/pages/Product";


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;


