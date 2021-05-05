import React from "react";
import { Card } from "react-bootstrap";
import BaseContainer from "./baseContainer";

const Projects = () => {
    return (
        <BaseContainer>
            <h1>Projects</h1>
            <Card bg='secondary' text='white'>
                <Card.Body>
                    <Card.Title>
                        genetic algorithm
                    </Card.Title>
                    <Card.Subtitle>
                        not
                    </Card.Subtitle>
                    <Card.Text>
                        done
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
        </BaseContainer>
    );
};

export default Projects;