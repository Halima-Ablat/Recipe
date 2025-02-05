import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <a href="#"  className="food-recipe">FoodRecipe</a>
      </div>
      <div className="input">
        <input type="text" placeholder="Enter Items..." />
      </div>
      <div className="favorite">
        <a href="#" className="home">Home</a>
        <a href="#" className="favorite">favorites</a>
      </div>
    </div>
  );
}

export default Navbar;
