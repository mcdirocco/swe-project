import React, { Component } from 'react';
import { NavMenuItems } from "./NavMenuItems";
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div style={{display: "flex", flex: 1, backgroundColor: '#5a5377'}}>
                <nav className="NavbarContainer">
                    {/*<h1 className="navbar-logo"/>*/}
                    {/*<div className="menu-icon">*/}
                    {/*</div>*/}
                    <ul className='NavbarMenuItems'>
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
                </nav>
            </div>
        );
    }
}

export default Navbar
