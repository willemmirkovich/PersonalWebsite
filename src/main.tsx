import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Image } from "react-bootstrap";

import BaseContainer from "./baseContainer";
import Header from "./header";
import Footer from "./footer";
import Experience from "./experience";
import Resume from "./resume";
import Education from "./education";
import Projects from "./projects";

// NOTE: need to import actual css files for bootstrap to work
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
    return (
        // NEED TO HANDLE CHILDREN
        // TODO: need personal image here
        <BaseContainer> 
            <h1>Willem Mirkovich</h1>
            <p>
                Full-time software engineer and part-time researcher. 
                I enjoy tackling hard problems, and am always seeking new challenges.
            </p>
            <h2>Recent</h2>
            <p>
                Some of my most recent activities
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
                <Route path="/projects" component={Projects}></Route>
                <Route path="/resume" component={Resume}></Route>
            </Switch>
            <Footer />
        </div>
    </Router>
)

render(router, document.getElementById('root'));