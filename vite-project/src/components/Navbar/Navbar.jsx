import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css';
import { logLinks, navLinks } from './navLinks'

const NavBar = () => {
    return (
        <div>
            <div className="mai nav-home">
                <div className="nav-container ">
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <NavLink key={link.is} to={link.path}>
                                {link.lable}
                            </NavLink>
                        ))}
                    </div>

                    <div className="nav-login">
                        {logLinks.map((link) => (
                            <NavLink key={link.id} to={link.path}>
                                {link.lable}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
