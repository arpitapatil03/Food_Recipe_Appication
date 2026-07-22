import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">

      <img
        src={recipe.image}
        alt={recipe.name}
      />

      <div className="recipe-content">
        <h3>{recipe.name}</h3>

        <Link to={`/recipe/${recipe.id}`}>
          <button>
            View Recipe
          </button>
        </Link>

      </div>

    </div>
  );
}

export default RecipeCard;