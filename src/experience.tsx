import React from "react";
import { Card } from "react-bootstrap";
import BaseContainer from "./baseContainer";

const DarkCard = (title: string, sub: React.ReactNode, text: React.ReactNode) => {
    // IDEA: on the right, could display tech used
    return (
        <div>
            <Card bg='dark' text='white'>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{sub}</Card.Subtitle>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
        </div>
    )

}

const Experience = () => {
    // NOTE: bg=dark

    // TODO: get full name of aero

    // TODO: cool list of tech you know here
    return (
        <BaseContainer>
            <h1>Experience</h1>
            {DarkCard(
                "Full Stack Software Engineer 2",
                "Anark Corporation, Nov 2020-Current",
                <ul>
                    <li>Developed</li>
                </ul>
            )}
            {DarkCard(
                "Professional Research Assistant",
                "CU Boulder Aerospace, June 2020-Current",
                <ul>
                    <li>Did</li>
                </ul>
            )}
            {DarkCard(
                "Full Stack Software Engineer 1",
                "Anark Corporation, July 2020-Nov 2020",
                <ul>
                    <li>Developed</li>
                </ul>
            )}
            {DarkCard(
                "Full Stack Software Engineer Intern",
                "Anark Corporation, Nov 2018-May 2020",
                <ul>
                    <li>Developed</li>
                </ul>
            )}
            {DarkCard(
                "Undergraduate Research Assistant/Developer",
                "CU Boulder Aerospace, Aug 2019-May 2020",
                <ul>
                    <li>Developed</li>
                </ul>
            )}
            {DarkCard(
                "Software Developer",
                "CU Boulder, Jan 2020-May 2020",
                <ul>
                    <li>Developed</li>
                </ul>
            )}
            {DarkCard(
                "Teaching Assistant",
                <div>
                    <text>CU Boulder Engineering and Applied Science</text>
                    <br></br>
                    <text>Jan 2019-May 2019, Aug 2019 - Dec 2019</text>
                </div>,
                <ul>
                    <li>Developed</li>
                </ul>
            )}
            {DarkCard(
                "Undergraduate Research Assistant/Developer",
                "CU Boulder Aerospace, Jan 2019-May 2019, Aug 2019 - Dec 2019",
                <ul>
                    <li>Developed</li>
                </ul>
            )}
        </BaseContainer>
    )
}

export default Experience;