import React from "react";
import "./recipe.css";

function RecipeCard({ label, result }) {
  return (
    <div id={result.label} className="main-cards">
      <img src={result.image} alt={result.label} />
      <h1>{result.label}</h1>
      <p>{result.calories}</p>
      <ol>
        {result.ingredients.map((ingredient, pos) => (
          <li key={pos}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeCard;
