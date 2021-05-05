import React from "react";
import { Card } from "react-bootstrap";
import BaseContainer from "./baseContainer";

const Education = () => {
    return (
        <BaseContainer>
            <h1>Education</h1>
            <Card>
                <Card.Img src="/static/CU.jpg"></Card.Img>
                <Card.Body>
                    <Card.Title>
                        University of Colorado Boulder
                    </Card.Title>
                    <Card.Subtitle>
                        2018 - 2020
                    </Card.Subtitle>
                    <Card.Text>
                        Graduated with 3.9
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Img src="/static/UW.jpg"></Card.Img>
                <Card.Body>
                    <Card.Title>
                        University of Washington Seattle 
                    </Card.Title>
                    <Card.Subtitle>
                        2016 - 2018
                    </Card.Subtitle>
                    <Card.Text>
                        Graduated with 3.9
                    </Card.Text>
                </Card.Body>
            </Card>
        </BaseContainer>
    );
};

export default Education;