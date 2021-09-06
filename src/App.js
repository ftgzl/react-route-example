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
        </Switch>
      </div>
    </Router>
  );
}