import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Wishes from "./components/pages/Wishes";
import Cart from "./components/pages/Cart";
import Header from "./components/header";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <></>
    </>
  );
}


export default App;


