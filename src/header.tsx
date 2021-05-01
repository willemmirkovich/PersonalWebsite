import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        // TODO: determine if best way to do this
        <header>
            <nav>
                <NavLink exact activeClassName='active' to="/">Home</NavLink>
                <NavLink exact activeClassName='active' to="/experience">Experience</NavLink>
                <NavLink exact activeClassName='active' to="/resume">Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header;