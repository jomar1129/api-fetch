import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

import "./recipe.css";

export const Recipe = () => {
  const appId = "4e609b8d";
  const apikey = "351d81469ce1764776788af32a559929";

  // const recipe = `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${apikey}&from=0&to=3&calories=591-722&health=alcohol-free`;
  // States
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("beef");

  //EFFECT
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apikey}`
    );

    const data = await response.json();
    // console.log(data.hits);
    setRecipe(data.hits);
  };

  const getQuery = (e) => {
    console.log("fired");
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateStateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="weather-main">
      <h1 style={{ textAlign: "center" }}>FOOD SEARCH API</h1>
      <form onSubmit={getQuery} className="weather-inputs">
        <input
          className="search-bar"
          value={search}
          placeholder="Search"
          type="text"
          id="search"
          name="search"
          onChange={updateStateSearch}
          required
        />
        <button className="btn-search">Search</button>
      </form>

      <div className="recipes">
        {recipe.map((recipes, pos) => (
          <RecipeCard key={pos} result={recipes.recipe} />
        ))}
      </div>
    </div>
  );
};
