import React from 'react'
import {Link} from "react-router-dom"

export default class Home extends React.Component {
    render() {
        // 加载任何页面前，加载hashrouter
        return (
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
            </div>
        )
    }
}
