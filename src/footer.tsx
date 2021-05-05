import React from "react";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";

const Footer = () => {
    // TODO: check sizing
    return (
        <Container fluid>
            <Jumbotron>
                <Row>
                    <Col lg={{span:'3', offset:'2'}} sm='4'>
                        <h2>Contact</h2>
                        <p>Willem Mirkovich</p>
                        <a href='mailto: willemmirkovich@gmail.com'>willemmirkovich@gmail.com</a>
                    </Col>
                    <Col lg='3' sm='4'>
                        <h2>Social Media</h2>
                        <a href="https://github.com">
                            <img src='/static/github.png'></img>
                        </a>
                    </Col>
                    <Col lg='3' sm='4'>
                        <h2>Acknowledgements</h2>
                        <p>Built using React and Bootstrap</p>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}

export default Footer;