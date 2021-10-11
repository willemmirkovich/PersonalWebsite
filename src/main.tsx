import React from "react";
import { render } from "react-dom";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { Card, Button, Image } from "react-bootstrap";

import BaseContainer from "./baseContainer";
import Header from "./header";
import Footer from "./footer";
import Experience from "./experience";
import Resume from "./resume";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";

// TODO: cedar image needs to be mobile friendly
const Main = () => {
    return (
        <BaseContainer> 
            <h1>Willem Mirkovich</h1>
            <p>
                Full-time software engineer and part-time researcher. 
                I enjoy tackling hard problems, and am always seeking new challenges.
                I am interested in Machine Learning, and have experience in multiple areas of Computer Science.
            </p>
            <h2>Recent</h2>
            <Card className="text-center">
                <Card.Body>
                    <Image src='/static/cedar-meeting.png' height='200px'></Image>
                    <Card.Title>Hosted workshop at Cedar 2021 for AMGeO</Card.Title>
                    <Card.Text>
                        Hosted Notebooks related to new AMGeO API on AWS server for multiple users to interact with and follow

                        Notebooks are accessible <a target="_blank" href="https://github.com/AMGeO-Collaboration/CEDAR-Workshop-2021">here</a>,
                         and can be run using Docker
                    </Card.Text>
                    <Button variant="secondary" target="_blank" href="https://github.com/AMGeO-Collaboration/CEDAR-Workshop-2021">github</Button>
                </Card.Body>
                <Card.Footer className="text-muted">5/25/2021</Card.Footer>
                </Card>
            <h2>See the Source</h2>
            <p>
                Check out the source code for this website  <a target="_blank" href="https://github.com/willemmirkovich/PersonalWebsite">here</a> 
            </p>
        </BaseContainer>
    )
}  
const router = (
    <Router>
        <div>
            <Header />
            <hr />
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route path="/education" component={Education}></Route>
                <Route path="/experience" component={Experience}></Route>
                <Route path="/skills" component={Skills}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/resume" component={Resume}></Route>
            </Switch>
            <Footer />
        </div>
    </Router>
)

render(router, document.getElementById('root'));