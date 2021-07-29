import React, { useState, useEffect } from "react";
import "./movies.css";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Spiderman");

  const apiKey = "76754e97";

  const movieSearch = async () => {
    const response = await fetch(
      `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "6de42463bdmshdd82fda237050d3p1ff56ajsnad36ef4a3dc0",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      }
    );

    const data = await response.json();
    console.log(data.d);
    setMovies(data.d);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    movieSearch();
  }, [query]);

  return (
    <div className="weather-main">
      <h1>MOVIE SEARCH</h1>
      <form onSubmit={updateQuery} className="weather-inputs">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Search Movies"
          required
        />
        <button>Search</button>
      </form>
      <div className="movies-body">
        {movies.map((movie) => (
          <div className="movie-cards">
            <img src={movie.i.imageUrl} alt={movie.l} />
            <h3>
              {movie.l}({movie.y})
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
