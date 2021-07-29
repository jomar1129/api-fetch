import React from "react";
import "./home.css";
import gif from "../../images/api3.gif";
import api from "../../images/api2.jpg";

export const Home = () => {
  return (
    <div class="home">
      <h1>A Simple Collection of my API PROJECTS</h1>
      <div className="image-body">
        <img src={gif} alt="api>" />
        <img src={api} alt="api-meme" />
      </div>
    </div>
  );
};
