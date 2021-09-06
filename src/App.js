import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Users from "./components/Users/Users";
<<<<<<< HEAD
import Error404 from "./components/Error/Error404";
=======
>>>>>>> fe160643b5c56b94ee3c043477f31d0aa4ec1a0e

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink  
                exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
<<<<<<< HEAD
          <Route path="*" component={Error404} />
=======
>>>>>>> fe160643b5c56b94ee3c043477f31d0aa4ec1a0e
        </Switch>
      </div>
    </Router>
  );
}