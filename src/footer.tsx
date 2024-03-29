import React from "react";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";

const Footer = () => {
    // TODO: check sizing
    // TODO: sizing on footer for mobile could use spaces

    // TODO: linked in and such for links

    // TODO: need correct link for web src
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
                        <a target="_blank" href="https://github.com/willemmirkovich">
                            <img src='/static/logo/github.png'></img>
                        </a>
                        <span style={{paddingLeft:"20px"}}></span>
                        <a target="_blank" href="https://www.linkedin.com/in/willem-mirkovich-48a417153/">
                            <img src='/static/logo/linkedin.png' width='60px' height='50px'></img>
                        </a>
                    </Col>
                    <Col lg='2' sm='4'>
                        <h2>Acknowledgements</h2>
                        <p>Built using React and Bootstrap</p>
                        <a target="_blank" href="https://react-bootstrap.github.io/">
                            <img src='/static/logo/react-bootstrap.svg' width='50px' height='50px'></img>
                        </a>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}

export default Footer;