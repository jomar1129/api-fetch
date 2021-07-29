import React, { useState, useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <nav className="navBar">
      <h1>API PROJECTS</h1>
      <ul className="navbar-link">
        <Link className="react-link" to="/api-fetch/">
          <li style={{ color: "#f4f4f4" }}>Home</li>
        </Link>
        <li
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          My API'S
        </li>
        {isShown && (
          <ul
            className="nav-link"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <Link className="react-link" to="/api-fetch/weather">
              <li className="nav-item">Weather</li>
            </Link>
            <Link className="react-link" to="/api-fetch/recipe">
              <li className="nav-item">Recipe</li>
            </Link>
            <Link className="react-link" to="/api-fetch/movies">
              <li className="nav-item">Movies</li>
            </Link>
          </ul>
        )}
      </ul>
    </nav>
  );
};
