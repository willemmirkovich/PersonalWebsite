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
    // TODO: get full name of aero

    // TODO: cool list of tech you know here
    return (
        <BaseContainer>
            <h1>Experience</h1>
            <p>For full experience list/details, please see <a href='/resume'>my resume</a></p>
            {DarkCard(
                "Full Stack Software Engineer 2",
                "Anark Corporation, Nov 2020-Current",
                <div>
                    <p>Part of Full Stack Development Team</p>
                    <ul>
                        <li>Developed, Designed and maintained Typecript API for interacting with 3d, pdf, images and structured data in browser</li>
                        <li>Implemented code-splitting to improve performance of our javascript load times initial load times</li>
                    </ul>
                </div>
            )}
            {DarkCard(
                "Professional Research Assistant",
                "CU Boulder Aerospace, June 2020-Current",
                <div>
                    <p>Member of AMGeO Organization, headed by <a href="https://www.colorado.edu/aerospace/tomoko-matsuo">Tomoko Matsuo</a></p>
                    <ul>
                        <li>Presented at Earthcube 2021</li>
                        <li>Helped in hosting JupyterHub workshop for AMGeO on AWS</li>
                        <li>Developed API for interfacing with AMGeO through python</li>
                        <li>Presented at AGU 2020</li>
                    </ul>
                </div>
            )}
            {DarkCard(
                "Full Stack Software Engineer 1",
                "Anark Corporation, July 2020-Nov 2020",
                <ul>
                    <li>Jest Puppeteer</li>
                    <li>Bundled our api using webpack for using across our code base</li>
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
                "CU Boulder Aerospace, Jan 2019-May 2019, Aug 2019 - Dec 2019",
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
                    <li></li>
                </ul>
            )}
        </BaseContainer>
    )
}

export default Experience;