import React from "react";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return(
        <Container fluid>
            <Nav>
                <LinkContainer to="/">
                    <Nav.Link disabled>Willem Mirkovich</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link> 
                </LinkContainer>
                <LinkContainer to="/education">
                    <Nav.Link>Education</Nav.Link> 
                </LinkContainer>
                <LinkContainer to="/experience">
                    <Nav.Link>Experience</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/skills'>
                    <Nav.Link>Skills</Nav.Link> 
                </LinkContainer>
                <LinkContainer to="/projects">
                    <Nav.Link>Projects</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/resume'>
                    <Nav.Link>Resume</Nav.Link> 
                </LinkContainer>
            </Nav>
        </Container>
    )
}

export default Header;