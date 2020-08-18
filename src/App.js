import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logodiv">
            <Link className="logo" to="/home">
              Cezary<span>Cieśliński</span>
            </Link>
          </div>
          <ul className="nav-items">
            <Link className="nav-item" to="/home">
              <li className="li">Home</li>
            </Link>
            <Link className="nav-item" to="/shop">
              <li className="li">Shop</li>
            </Link>
            <Link className="nav-item" to="/contact">
              <li className="li">Contact</li>
            </Link>
          </ul>
        </nav>

        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
