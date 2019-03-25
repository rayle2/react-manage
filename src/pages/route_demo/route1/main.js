import React from 'react'
import { Link } from 'react-router-dom'
export default class Main extends React.Component {
  render() {
    // 加载任何页面前，加载hashrouter
    return (
      <div>
        main
        <Link to="/main/a">嵌套路由</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
