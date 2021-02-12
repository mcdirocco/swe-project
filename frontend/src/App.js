import './App.css';
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route, 
  Link, 
} from "react-router-dom";

import Landing from "./components/Landing";
import Login from "./components/Login";


const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/Landing">Landing Page</Link>
        <Link to="/Login">Login</Link>
        <Route path="/Landing" component={Landing} />
        <Route path="/Login" component={Login} />
      </Router>
    </section>
  );
};
export default App;
