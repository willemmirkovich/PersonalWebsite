import React from "react";
import { Container, Jumbotron, Col } from "react-bootstrap";


interface BaseContainerProps {
    children: React.ReactNode;
}
const BaseContainer = (props: BaseContainerProps) => {
    return (
        <Container fluid>
            <Jumbotron>
                <Col lg={{ span: 8, offset: 2}} sm='12'>
                    {props.children}
                </Col>
            </Jumbotron>
        </Container>
    );

};

export default BaseContainer;