import React, { useContext } from "react";
import {NavLink} from 'react-router-dom'
import { GlobalContext } from "./Context";


function Navbar() {

  const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

  console.log(searchParam)

  return (
    <div className="navbar">
      <div>
        <NavLink to={'/'} className="food-recipe">FoodRecipe</NavLink>
      </div>
      <form className="input" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Items..." value={searchParam} onChange={(event) => setSearchParam(event.target.value)} />
      </form>
      <div className="favorite">
        <NavLink to={'/'} className="home">Home</NavLink>
        <NavLink to={'/favorites'} className="favorite">favorites</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
