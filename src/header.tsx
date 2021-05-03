import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return(
        <Nav>
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link> 
            </LinkContainer>
            <LinkContainer to="/experience">
                <Nav.Link>Experience</Nav.Link> 
            </LinkContainer>
            <LinkContainer to='/resume'>
                <Nav.Link>Resume</Nav.Link> 
            </LinkContainer>
        </Nav>
    )
}

export default Header;