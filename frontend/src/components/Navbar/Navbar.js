import React, { Component } from 'react';
import { NavMenuItems } from "./NavMenuItems";
import {Navbar, Nav, } from "react-bootstrap"
import './Navbar.css'

class NavbarClass extends React.Component {

    render() {
        let name = localStorage.getItem("name");
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="landing">SWE - University of Florida</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="landing">Home</Nav.Link>
                    <Nav.Link href="memberData">MemberData</Nav.Link>
                    <Nav.Link href="login">Login</Nav.Link>
                    <Nav.Link href="accountDetails">Account Details</Nav.Link>
                    </Nav>
                    <Nav inline>
                        <Nav.Link disabled={false}>Welcome, {name === null ? 'Guest' : name}!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarClass

//<div style={{display: "flex", flex: 1, backgroundColor: '#5a5377'}}>
{/* <nav className="NavbarContainer">
{/*<h1 className="navbar-logo"/>*/}
{/*<div className="menu-icon">*/}
{/*</div>*/}
{/* <ul className='NavbarMenuItems'>
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
</nav> */}
{/*</div> */}
