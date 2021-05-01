import React from "react";
// import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return(
        // TODO: determine if best way to do this
        <Nav>
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link> 
            </LinkContainer>
            <LinkContainer to="/experience">
                <Nav.Link>Experience</Nav.Link> 
            </LinkContainer>
        </Nav>
    )
}

export default Header;