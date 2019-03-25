import React from 'react'

export default class Info extends React.Component {
  render() {
    return <div>设置动态路功能
      动态路由的值是{this.props.match.params.value}
    </div>
  }
}
