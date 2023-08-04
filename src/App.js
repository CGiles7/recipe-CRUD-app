import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (recipeIndex) => {
    const updatedRecipes = recipes.filter((_, index) => index !== recipeIndex);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDelete={deleteRecipe} />
      <RecipeCreate onAdd={addRecipe} />
    </div>
  );
}

export default App;
