import "./App.css";
import { NavBar } from "./components/navigation/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WeatherAPi } from "./components/weatherApi/WeatherAPi";
import { Recipe } from "./components/recipe/Recipe";
import { Home } from "./components/home/Home";
import { Movies } from "./components/movies/Movies";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/weather" component={WeatherAPi} />
          <Route path="/recipe" component={Recipe} />
        </Switch>
        <footer style={{ textAlign: "center" }}>
          <h3>Created by &copy; Jose Cotejo</h3>
        </footer>
      </Router>
    </div>
  );
}

export default App;
