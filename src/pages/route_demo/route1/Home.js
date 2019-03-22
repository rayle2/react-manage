import React from 'react'
import {HashRouter, Route, Link, Switch} from "react-router-dom"
import Main from './main'
import About from './about'
import Topic from './topic'

export default class Home extends React.Component {
    render() {
        // 加载任何页面前，加载hashrouter
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topic">Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    {/*<Route exact path="/" component={Main}/>*/}
                    {/*<Route path="/about" component={About}/>*/}
                    {/*<Route path="/topic" component={Topic}/>*/}
                    {/*switch 如果不加exact 一旦匹配到一个， 就不会往下匹配*/}
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topic" component={Topic}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
