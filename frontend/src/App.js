import './App.css';
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';      //Bootstrap link suggested to do this

import {
  BrowserRouter as Router,
  Route, 
  Link, 
} from "react-router-dom";

import AdminPortal from "./components/AdminPortal"; /* is this taking the .js files or ALL files with its same name, regardless of ending (.js, .css, .html)*/
import Landing from "./components/Landing";
import Login from "./components/Login";
import MemberData from "./components/MemberData";
import AccountDetails from "./components/AccountDetails";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <section className="App">
      <div> <Navbar /> </div>
      <Router>
        <Route path="/AdminPortal" component={AdminPortal} />
        <Route path="/MemberData" component={MemberData} />
        <Route path="/Login" component={Login} />
        <Route path="/AccountDetails" component={AccountDetails} />
        <Route path="/SignUp" component={Login} />
        <Route path="/Landing" component={Landing} />
      </Router>
    </section>

  );
};
export default App;

/*
<Link to="/Landing">Landing Page</Link>
        <Link to="/Login">Login</Link>
 */