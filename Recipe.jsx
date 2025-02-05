import React, { useState } from "react";
import Navbar from "./Navbar";

function Recipe() {

  const[search, setSearch] = useState("");
  const[recipeData, setRecipeData] = useState(null);
  const[loading, setLoading] = useState(false);
  const[errorMessage, setErrorMessage] = useState("");
   
   async function fetchData(params) {
    setLoading(true);
    try {
      const response = await fetch();
      const data = await response.json();

      if(data){
        setRecipeData(data);
        setLoading(false)
      }
    } catch (error) {
      setErrorMessage(error.message);
    }finally{
      setLoading(false)
    }
   }

  return (
    <div>
      <Navbar />
      {loading ? ("Nothing to show. Please search later" ) : 
      ( <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title
          </p>
          <a href="#" className="btn btn-dark">
            RECIPE DETAILS
          </a>
        </div>
      </div>)}
     
    </div>
  );
}

export default Recipe;
