import React from "react";
import { Container, Jumbotron, Col } from "react-bootstrap";


// TODO: figure out how to do
const BaseContainer = (content: React.Component) => {
    return (
        <Container fluid>
            <Jumbotron>
                <Col lg={{ span: 6, offset: 3}} sm='12'>
                </Col>
            </Jumbotron>
        </Container>
    );

};

export default BaseContainer;