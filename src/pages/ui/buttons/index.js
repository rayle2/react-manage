import React from 'react'
import { Card, Button } from 'antd'
import './ui.less'

export default class Buttons extends React.Component {
  render() {
    // 加载任何页面前，加载hashrouter
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">主要按钮</Button>
          <Button type="">普通按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="danger">警告</Button>
          <Button disabled>禁用按钮</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle" />
          <Button type="primary" icon="search">
            搜素</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="载入按钮">
          <Button type="primary" loading>
            确定
          </Button>
          <Button type="primary" loading shape="circle" />
          <Button loading>点击加载</Button>
          <Button loading shape="circle" />
          <Button type="primary" onClick>
            关闭
          </Button>
        </Card>
      </div>
    )
  }
}
