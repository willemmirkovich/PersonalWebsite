import React from "react";
import { Container, Jumbotron, Col } from "react-bootstrap";
import { JsxElement } from "typescript";


interface BaseContainerProps {
    children: React.ReactNode;
}
// TODO: figure out how to do
const BaseContainer = (props: BaseContainerProps) => {
    return (
        <Container fluid>
            <Jumbotron>
                <Col lg={{ span: 6, offset: 3}} sm='12'>
                    {props.children}
                </Col>
            </Jumbotron>
        </Container>
    );

};

export default BaseContainer;