import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link}from "react-router-dom";
import Login from "../../component/pages/Login"
import Dashboard from "../../component/pages/Dashboard";
import About from "../../component/pages/About";
import InputData from "../../component/pages/inputData";

const Routes = () => {
    return (
        <Router>
        <Switch>
            <Route exact path="/">
                <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
                <Login title ="Welcome"></Login>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/InputData">
                <InputData></InputData>
            </Route>
        </Switch>
        </Router>
    )
};

export default Routes;