import React from 'react'
import { Card, Button } from 'antd'

export default class Buttons extends React.Component {
  render() {
    // 加载任何页面前，加载hashrouter
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">EVO</Button>
        </Card>
      </div>
    )
  }
}
