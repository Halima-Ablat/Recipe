import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "./Context";

function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, handleAddToFavorite, favoritesList } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);

  return (
    <div className="container py-4">
      <div className="row gy-4 ">
        <div className="col-12 col-lg-6 ">
          <div className="h-100 overflow-hidden rounded">
            <img
              src={recipeDetailsData?.recipe?.image_url}
              className="img-fluid w-100 h-100 d-block custom-hover-effect"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column gap-3">
          <span className="text-success">{recipeDetailsData?.recipe?.publisher}</span>
          <h5>{recipeDetailsData?.recipe?.title}</h5>
          <div>
            <button onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)} className="btn btn-dark" >
              {
                favoritesList && favoritesList.length > 0 && favoritesList.findIndex((item) => item.id === recipeDetailsData?.recipe.id) !== -1 ? "Remove from favorites" : "Add to favorites"
              }
            </button>
          </div>
          <div>
            <span className="fw-bold ">Ingredients:</span>
            <ul className="list-unstyled mt-2">
              {
                recipeDetailsData?.recipe?.ingredients.map((ingredient, id) => <li key={id}>
                  <span>{ingredient.quantity} {ingredient.unit} {ingredient.description}</span>
                  
                </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
