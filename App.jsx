import {  Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Recipe from "./Recipe";
import Favorite from "./Favorite";
import Details from "./Details";

function App() {
  return (
    <div>
       <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
    </div>
   
  );
}

export default App;
