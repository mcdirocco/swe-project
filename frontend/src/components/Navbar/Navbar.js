import React, { Component } from 'react';
import { NavMenuItems } from "./NavMenuItems";
import {Navbar, Nav, } from "react-bootstrap"
import './Navbar.css'

class NavbarClass extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="Landing">Home</Nav.Link>
                    <Nav.Link href="MemberData">MemberData</Nav.Link>
                    <Nav.Link href="Login">Login</Nav.Link>
                    <Nav.Link href="AccountDetails">Account Details</Nav.Link>
                    </Nav>
                    <Nav inline>
                        <p>Welcome</p>
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
