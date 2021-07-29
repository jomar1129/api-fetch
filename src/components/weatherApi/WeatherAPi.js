import React, { useState, useEffect } from "react";
import "./weather.css";

export const WeatherAPi = () => {
  const [weatherNew, setWeather] = useState([]);
  const [weatherInput, newWeatherInput] = useState("");
  const [description, setDescription] = useState([]);
  const [sys, newSys] = useState([]);
  const [main, setMain] = useState([]);
  const [query, setQuery] = useState("Sydney");
  let apiKey = "05fe4645f412681568fb6efd7002b32c";

  const fetchWeather = async () => {
    const fetchData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
    );
    const data = await fetchData.json();
    setWeather(data);
    setDescription(data.weather[0]);
    setMain(data.main);
    newSys(data.sys);
    // console.log(data.main.temp);
  };

  useEffect(() => {
    fetchWeather();
  }, [query]);

  //submit search

  const searchCity = (e) => {
    e.preventDefault();
    console.log(e.target);
    setQuery(weatherInput);
    newWeatherInput("");
  };

  return (
    <div className="weather-main">
      <h1>WEATHER API</h1>
      <form onSubmit={searchCity} className="weather-inputs">
        <input
          value={weatherInput}
          onChange={(e) => {
            newWeatherInput(e.target.value);
          }}
          type="text"
          placeholder="Input City"
          required
        />
        <button>Search</button>
      </form>
      <div className="weather-card">
        <h1>
          {weatherNew.name}, {sys.country}
        </h1>
        <img
          src={`http://openweathermap.org/img/wn/${description.icon}@4x.png`}
        />
        <p>{main.temp} &#8451;</p>
        <div className="temp-min">
          <p>Min: {main.temp_min} &#8451;</p>
          <p>Max: {main.temp_max} &#8451;</p>
        </div>
        <p className="weather-description">{description.description}</p>
      </div>
    </div>
  );
};
