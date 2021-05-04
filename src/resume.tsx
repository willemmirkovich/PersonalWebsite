import React from "react";
import { Button, Col, Container, Jumbotron } from "react-bootstrap";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

const Resume = () => {
    // NOTE: this is good sizing
    return (
        <Container fluid>
            <Jumbotron>
                <Col lg={{ span: 6, offset: 3}} sm='12'>
                    <h1>My Resume</h1>
                    <Button size='lg' href='/resume'>Download</Button>
                    <ResponsiveEmbed>
                        <embed src="/static/test.pdf"/>
                    </ResponsiveEmbed>
                </Col>
            </Jumbotron>
        </Container>
    );
};

export default Resume;