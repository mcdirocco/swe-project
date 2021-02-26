import React, { Component } from 'react';
import { NavMenuItems } from "./NavMenuItems";
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarMenuItems">
                <h1 className="navbar-logo"/>
                <div className="menu-icon">

                </div>
                <ul className='UnorderdNavBarList'>
                    {NavMenuItems.map((item, index) => {
                        return (
                            <li className='InnerMapList' key={index}>
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