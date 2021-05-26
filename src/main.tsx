import React from "react";
import { render } from "react-dom";
import { Route, HashRouter as Router, Switch, useLocation } from "react-router-dom";
import { Card, Button, Image } from "react-bootstrap";

import BaseContainer from "./baseContainer";
import Header from "./header";
import Footer from "./footer";
import Experience from "./experience";
import Resume from "./resume";
import Education from "./education";
import Projects from "./projects";

// NOTE: need to import actual css files for bootstrap to work
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./skills";

const Main = () => {
    return (
        // NEED TO HANDLE CHILDREN
        // TODO: images for cards should be nice
        <BaseContainer> 
            <h1>Willem Mirkovich</h1>
            <p>
                Full-time software engineer and part-time researcher. 
                I enjoy tackling hard problems, and am always seeking new challenges.
                I am interested in Machine Learning, and have experience in multiple areas of Computer Science.
            </p>
            <h2>Recent</h2>
            <p>
                Some of my most recent activities
            </p>
            <Card className="text-center">
                <Card.Body>
                    <Image src='/static/earthcube.png' width='200px' height='200px'></Image>
                    <Card.Title>Preseneted at Earthcube 2021 for AMGeO</Card.Title>
                    <Card.Text>
                        Created a notebook to present for eartcube 2021 that could be run in a Docker container.
                    </Card.Text>
                    <Button variant="secondary" href="https://github.com/AMGeO-Collaboration/Earthcube-Meeting-2021">github</Button>
                </Card.Body>
                <Card.Footer className="text-muted">5/25/2021</Card.Footer>
                </Card>
            <h2>See the Source</h2>
            <p>
                Check out the source code for this website  <a href="https://www.w3schools.com">here</a> 
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