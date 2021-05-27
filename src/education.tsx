import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import BaseContainer from "./baseContainer";

const Education = () => {
    return (
        <BaseContainer>
            <h1>Education</h1>
            <CardGroup>
                <Card>
                    <Card.Img src="/static/CU.jpg" height='261px'></Card.Img>
                    <Card.Body>
                        <Card.Title>
                            BS in Computer Science
                            <br></br>
                            <br></br>
                            University of Colorado Boulder, 
                            <br></br>
                            Engineering and Applied Science
                            <br></br>
                            <br></br>
                        </Card.Title>
                        <Card.Subtitle>
                            3.9 GPA, 2018 - 2020
                        </Card.Subtitle>
                        <Card.Text>
                            <ul>
                                <li>Graduated Magna Cum Laude</li>
                                <li>Dean's List</li>
                                <li>Engineering Transfer Scholarship</li>
                            </ul>
                            <p>
                                Focused in Data Science, AI and Machine Learning
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Img src="/static/UW.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title>
                            Pre-Engineering
                            <br></br>
                            <br></br>
                            University of Washington Seattle 
                            <br></br>
                            <br></br>
                        </Card.Title>
                        <Card.Subtitle>
                            3.7 GPA, 2016 - 2018
                        </Card.Subtitle>
                        <Card.Text>
                            <ul>
                                <li>Dean's List</li>
                            </ul>
                            <p>
                                Completed 2 years of pre-engineering focused in Computer Science
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </BaseContainer>
    );
};

export default Education;