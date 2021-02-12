import React, { Component } from 'react';
import { NavMenuItems } from "./NavMenuItems";
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarMenuItems">
                <h1 className="navbar-logo">Our Super Dope SWE Project<i className="fab fa-react"></i></h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {NavMenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar