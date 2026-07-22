import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import hero from "../images/hero.png";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/recipes/?search=${search}`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, [search]);

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="hero">
        <img
          src={hero}
          alt="Food"
          className="hero-image"
        />

        
      </div>

      <h2 className="recipe-title">Popular Recipes</h2>

      <div className="recipe-container">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))
        ) : (
          <h3>No Recipes Found</h3>
        )}
      </div>
    </div>
  );
}

export default Home;