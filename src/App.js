import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Wishes from "./components/pages/Wishes";


function App() {
  return (
    <>
      <Home/>
      <Routes>
        <Route path="/wishes" element={<Wishes/>} />
      </Routes>
      <></>
    </>
  );
}


export default App;


