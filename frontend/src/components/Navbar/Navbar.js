import React, {Component, useEffect, useState} from "react";
import {Navbar, Nav, Button, FormControl} from "react-bootstrap";
import "./Navbar.css";
import Form from "react-bootstrap/Form";
    

const NavbarClass = () => {
    let [loginVisible, setLoginVisible] = useState(true);
    let [userName, setUserName] = useState("Guest");
    let isAdmin = localStorage.getItem("isAdmin");
    
    useEffect(() => {
        let name = localStorage.getItem("name");
        if(name !== null) {
            setUserName(name);
            setLoginVisible(false);
            isAdmin = localStorage.getItem("isAdmin");
        }
        else
        {
            setUserName("Guest");
            setLoginVisible(true);
            isAdmin = false;
        }
    });
    let name = localStorage.getItem("name");
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="landing">SWE - Attendance Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
           
                <Nav className="mr-auto">
                    <Nav.Link href="landing">Calendar</Nav.Link>
                    {isAdmin === "true"
                        ? <Nav.Link href="memberData">Members</Nav.Link>
                        : ' '
                    }
                    <Nav.Link href="login">Login</Nav.Link>
                </Nav>
            
            
                <Form inline>
                    <Nav.Link className={"NavbarWelcome"}>Welcome, {userName}!</Nav.Link>
                    {!loginVisible && <Nav.Link href="accountDetails">My Account</Nav.Link>}
                    {loginVisible && <Button href={'/login'} variant="primary">Login</Button>}
                </Form>
                {/*<Nav inline>*/}
                {/*    <Nav.Link disabled={false}>*/}
                {/*        Welcome, {name === null ? "Guest" : name}!*/}
                {/*    </Nav.Link>*/}
                {/*    <Button href={"/login"}>Login</Button>*/}
                {/*</Nav>*/}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarClass;

//<div style={{display: "flex", flex: 1, backgroundColor: '#5a5377'}}>
{
    /* <nav className="NavbarContainer">
  {/*<h1 className="navbar-logo"/>*/
}
{
    /*<div className="menu-icon">*/
}
{
    /*</div>*/
}
{
    /* <ul className='NavbarMenuItems'>
      {NavMenuItems.map((item, index) => {
          return (
              <li className='InnerMapList' key={index}>
                  <a className={item.cName} href={item.url}>
                      {item.title}
                  </a>
              </li>
          );
      })}
  </ul>
  </nav> */
}
{
    /*</div> */
}
