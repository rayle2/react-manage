import React from 'react'
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom"
import Main from "./../route1/main";
import About from "./../route1/about";
import Topic from "./../route1/topic";

export default class IRoute extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topic" component={Topic}/>
                </div>
            </Router>
        )
    }
}
