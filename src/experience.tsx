import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import BaseContainer from "./baseContainer";

const Experience = () => {
    // NOTE: bg=dark
    return (
        <BaseContainer>
            <h1>Experience</h1>
            <CardDeck>
                <Card bg='dark' text='white'>
                    <Card.Body>
                        <Card.Title>
                            Sofware Engineer 2
                        </Card.Title>
                        <Card.Subtitle>
                            Anark Corporation
                        </Card.Subtitle>
                        <Card.Text>
                            Todo
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
                <Card bg='dark' text='white'>
                    <Card.Body>
                        <Card.Title>
                            Professional Research Assistant
                        </Card.Title>
                        <Card.Subtitle>
                            University of Colorado, Boulder Aerospace
                        </Card.Subtitle>
                        <Card.Text>
                            Todo
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </BaseContainer>
    )
}

export default Experience;