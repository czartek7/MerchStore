import React, { useState, useEffect } from "react";
import "./Shop.scss";
import Recipe from "./Recipe";

function Shop() {
  const API_KEY = "67dab673046d4701b7b9fbc530ed0218";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&tags=pasta&number=2`
    );
    const data = await response.json();
    console.log(data.recipes);
    setRecipes(data.recipes);
  };

  return (
    <div className="Shop">
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.title}
          desc={recipe.summary}
          image={recipe.image}
          key={recipe.id}
        />
      ))}
    </div>
  );
}

export default Shop;
