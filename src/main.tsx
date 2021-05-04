import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Experience from "./experience";
import Resume from "./resume";

// NOTE: need to import actual css files for bootstrap to work
import "bootstrap/dist/css/bootstrap.min.css";

// react-bootstrap
import { Container, Jumbotron } from "react-bootstrap";

const Main = () => {
    return (
        <Container fluid>
            <Jumbotron>
                <h1>Welcome</h1>
                <p>
                    My name is Willem, and I am a software Engineer and Part-time researcher. 
                    I enjoy tackling hard problems, and am always seeking new challenges.
                </p>
            </Jumbotron>
        </Container>
    )
}  
const router = (
    <Router>
        <div>
            <Header />
            <hr />
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route path="/experience" component={Experience}></Route>
                <Route path="/resume" component={Resume}></Route>
            </Switch>
            <Footer />
        </div>
    </Router>
)

render(router, document.getElementById('root'));