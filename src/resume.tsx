import React from "react";
import { Button, Col, Container, Jumbotron } from "react-bootstrap";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import BaseContainer from "./baseContainer";

const Resume = () => {
    // NOTE: this is good sizing
    return (
        <BaseContainer>
            <h1>My Resume</h1>
            <Button size='lg' href='/resume'>Download</Button>
            <ResponsiveEmbed>
                <embed src="/static/resume.pdf"/>
            </ResponsiveEmbed>
        </BaseContainer>
    );
};

export default Resume;