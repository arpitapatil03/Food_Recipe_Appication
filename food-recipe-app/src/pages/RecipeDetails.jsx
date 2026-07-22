import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.css";
import "./SearchResult.css";
function RecipeDetails() {

  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/recipes/${id}/`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!recipe) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="recipe-details">

       <img
           className="details-image"
         src={recipe.image}
        alt={recipe.name}
  />


      <h1>{recipe.name}</h1>

      <div className="details-box">

        <div className="section">
          <h2>Ingredients</h2>

          <ul>
            {recipe.ingredients
              .split("\n")
              .map((item, index) =>
                item.trim() ? (
                  <li key={index}>{item.trim()}</li>
                ) : null
              )}
          </ul>
        </div>

        <div className="section">
          <h2>Instructions</h2>

          <ol>
            {recipe.instructions
              .split("\n")
              .map((step, index) =>
                step.trim() ? (
                  <li key={index}>{step.trim()}</li>
                ) : null
              )}
          </ol>
        </div>

      </div>

    </div>
  );
}

export default RecipeDetails;