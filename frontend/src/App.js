import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';      //Bootstrap link suggested to do this

import {
    BrowserRouter as Router, Redirect,
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
        <Route exact path="/">
            <Redirect to="/landing" />
        </Route>
        <Route path="/adminPortal" component={AdminPortal} />
        <Route path="/memberData" component={MemberData} />
        <Route path="/login" component={Login} />
        <Route path="/accountDetails" component={AccountDetails} />
        <Route path="/signUp" component={Login} />
        <Route path="/landing" component={Landing} />
        <Route path="/createEvent" component={CreateEvent} />
      </Router>
    </section>

  );
};
export default App;
