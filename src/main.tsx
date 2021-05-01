import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Experience from "./experience";

// NOTE: need to import actual css files for bootstrap to work
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
    return (
        <h1>Hello</h1>
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
            </Switch>
            <Footer />
        </div>
    </Router>
)

render(router, document.getElementById('root'));