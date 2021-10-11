import React from "react";
import { Button, Card } from "react-bootstrap";
import BaseContainer from "./baseContainer";

const ProjectCard = (title: React.ReactNode, sub: React.ReactNode, text: React.ReactNode, link?: string) => {
    return (
            <Card bg='secondary' text='white'>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Subtitle>
                        {sub}
                    </Card.Subtitle>
                    {
                        (link ? <Button variant='primary' target="_blank" href={link}>Here</Button> : <div/>)
                    }
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}

const Projects = () => {
    return (
        // TODO: fill out
        <BaseContainer>
            <h1>Projects</h1>
            {ProjectCard(
                <p>This Website</p>,
                <p>5/25/21</p>,
                <p>Website to showcase my experience and career. Built using React, Bootstrap, Webpack among others</p>,
                "this need to work"
            )}
            <br></br>
        </BaseContainer>
    );
};

export default Projects;