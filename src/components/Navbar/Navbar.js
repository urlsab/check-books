import React from 'react';
import './Navbar.css';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

const Navbar = (props) => {
    return(
        <header className="main-header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact ><b>ראשי</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/search"><b>פרוייקטים</b></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;