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
            <p>For more condensed version of experience, please see <a href='/resume'>my resume</a></p>
            {DarkCard(
                "Full Stack Software Engineer 1/2",
                "Anark Corporation, July 2020-Current",
                <div>
                    <p>Part of Full Stack Development Team</p>
                    <ul>
                        <li>Developed, Designed and maintained Typecript API for interacting with 3d, pdf, images and structured data in browser</li>
                        <li>Implemented code-splitting in Webpack to improve performance of our build processes</li>
                        <li>Brought Test coverage of Typescript code base from ~20% to 60%</li>
                        <li>Built Micorservices withing Docker Containers</li>
                    </ul>
                </div>
            )}
            {DarkCard(
                "Professional Research Assistant",
                "CU Boulder Aerospace, June 2020-Current",
                <div>
                    <p>Member of AMGeO Organization, headed by <a target="_blank" href="https://www.colorado.edu/aerospace/tomoko-matsuo">Tomoko Matsuo</a></p>
                    <ul>
                        <li>Hosted workshop using JupyterHub on AWS for CEDAR 2021</li>
                        <li>Developed API for interfacing with AMGeO through python</li>
                        <li>Continued work on spatiotemporal prediction using Neural Networks</li>
                        <li>Presented at AGU 2020</li>
                    </ul>
                </div>
            )}
            {DarkCard(
                "Full Stack Software Engineer Intern",
                "Anark Corporation, Nov 2018-May 2020",
                <div>
                    <p>Began work with Typescript, and learned Test-Driven Development practices</p>
                </div>
            )}
            {DarkCard(
                "Undergraduate Research Assistant/Developer",
                "CU Boulder Aerospace, Jan 2019-May 2019, Aug 2019 - Dec 2019",
                <div>
                    <p>Began work on spatiotemporal prediction using assimilative maps from AMGeO, 
                        heped with development of website and AMGeO open-source</p>
                </div>
            )}
            {DarkCard(
                "Teaching Assistant, Discrete Structures Math Class",
                <div>
                    <text>CU Boulder Engineering and Applied Science</text>
                    <br></br>
                    <text>Jan 2019-May 2019, Aug 2019 - Dec 2019</text>
                </div>,
                <div>
                    <p>Led work group outside of class, hosted office hours</p>
                </div>
            )}
        </BaseContainer>
    )
}

export default Experience;