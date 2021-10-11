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
                        (link ? <div><Button variant='primary' target="_blank" href={link}>Here</Button> <br></br></div>: <div/>)
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
                <p>10/11/21</p>,
                <p>Website to showcase my experience and career. Built using React, Bootstrap, Webpack among others</p>,
                "https://github.com/willemmirkovich/PersonalWebsite"
            )}
            <br></br>
            {ProjectCard(
                <p>AMGeO</p>,
                <p>Member of the team for 2+ years</p>,
                <p>AMGeO is a data science software project funded by the NSFEarthCube program aiming to open up the vast amount of geospace data to a broader audience, while also giving users anaccess to data analysis tools that help gain meaningful insights. I am apart of the AMGeO team, helping with the developmentand release of open source software</p>,
                "https://amgeo.colorado.edu/"
            )}
        </BaseContainer>
    );
};

export default Projects;