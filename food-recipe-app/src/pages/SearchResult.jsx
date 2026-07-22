import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import "./SearchResult.css";

function SearchResult(){

 const {name}=useParams();

 const [recipes,setRecipes]=useState([]);


 useEffect(()=>{

  axios
  .get(`http://127.0.0.1:8000/api/recipes/?search=${name}`)
  .then((res)=>{
    setRecipes(res.data);
  });

 },[name]);


 return(
  <div>

    <h2>
        Search Result - {name}
    </h2>


    <div className="search-container">

    {
      recipes.map((recipe)=>(
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))
    }

    </div>

  </div>
 );

}

export default SearchResult;