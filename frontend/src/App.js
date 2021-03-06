import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';      //Bootstrap link suggested to do this

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import AdminPortal from "./components/AdminPortal"; /* is this taking the .js files or ALL files with its same name, regardless of ending (.js, .css, .html)*/
import Landing from "./components/Landing";
import Login from "./components/Login";
import MemberData from "./components/MemberData";
import AccountDetails from "./components/AccountDetails";
import SignUp from "./components/SignUp";
import CreateEvent from "./components/CreateEvent/CreateEvent"

const App = () => {
  return (
    <section className="App">
      <Navbar />
      <Router>
        <Route path="/AdminPortal" component={AdminPortal} />
        <Route path="/MemberData" component={MemberData} />
        <Route path="/Login" component={Login} />
        <Route path="/AccountDetails" component={AccountDetails} />
        <Route path="/SignUp" component={Login} />
        <Route path="/Landing" component={Landing} />
        <Route path="/CreateEvent" component={CreateEvent} />

      </Router>
    </section>

  );
};
export default App;
