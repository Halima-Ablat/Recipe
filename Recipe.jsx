import React, { useState, useContext } from "react";
import { GlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

function Recipe() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return <div className="text-center mt-3">Loading... Please wait !</div>;

  return (
    <div className="container mt-5">
      {recipeList && recipeList.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {recipeList.map((recipe, id) => (
            <div className="col" key={recipe?.id}>
              <div className="card shadow-lg border-0  custom-card p-3">
                <img
                  src={recipe?.image_url}
                  className="card-img-top img-center "
                  alt="..."
                />
                <div className="card-body">
                <span className="card-text">{recipe?.publisher}</span>
                  <h5 className="card-title">{recipe?.title}</h5>
                  <NavLink
                    to={`/recipe-item/${recipe?.id}`}
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
            Nothing to show. Please search somthing else!
          </p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
