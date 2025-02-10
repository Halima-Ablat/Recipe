import React, { useState, useContext } from "react";
import { GlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

function Favorite() {
  const { favoritesList} = useContext(GlobalContext);

  return (
    <div className="container mt-5">
      {favoritesList && favoritesList.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {favoritesList.map((recipeItem, id) => (
            <div className="col" key={recipeItem?.id}>
              <div className="card shadow-lg border-0  custom-card p-3">
                <img 
                  src={recipeItem?.image_url}
                  className="card-img-top img-center "
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">{recipeItem?.publisher}</span>
                  <h5 className="card-title">{recipeItem?.title}</h5>
                  <NavLink
                    to={`/recipe-item/${recipeItem?.id}`}
                    className="btn btn-dark mt-auto"
                  >
                    RECIPE DETAILS
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="fs-1 fw-bold text-center mt-5">
            Nothing is added in favorites!
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorite;
