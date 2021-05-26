import React from "react";
import { ListGroup } from "react-bootstrap";
import BaseContainer from "./baseContainer";

const Skills = () => {
    return (
        <BaseContainer>
            <h1>Skills</h1>
            <h2>Languages</h2>
            <ListGroup horizontal>
                <ListGroup.Item>One</ListGroup.Item>
            </ListGroup>
            <h2>Tools</h2>
            <ListGroup horizontal>
                <ListGroup.Item>One</ListGroup.Item>
            </ListGroup>
            <h2>Frameworks</h2>
            <ListGroup horizontal>
                <ListGroup.Item>One</ListGroup.Item>
            </ListGroup>
        </BaseContainer>
    )
}
export default Skills