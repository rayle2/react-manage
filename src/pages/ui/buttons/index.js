import React from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.less'

export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      size: 'default'
    }
  }
  handleCloseLoading() {
    this.setState({
      loading: false
    })
  }
  // handleButtonSize(evt) {
  //   let size = evt.target.value
  //   this.setState({
  //     size: size
  //   })
  // }
  handleChange(evt) {
    this.setState({
      size: evt.target.value
    })
  }
  render() {
    // 加载任何页面前，加载hashrouter
    return (
      <div>
        <Card title="基础按钮" className="card-wrapper">
          <Button type="primary">主要按钮</Button>
          <Button type="">普通按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="danger">警告</Button>
          <Button disabled>禁用按钮</Button>
        </Card>
        <Card title="图形按钮" className="card-wrapper">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle" />
          <Button type="primary" icon="search">
            搜素
          </Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>
        <Card title="载入按钮" className="card-wrapper">
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button type="primary" loading={this.state.loading} shape="circle" />
          <Button loading={this.state.loading}>点击加载</Button>
          <Button loading={this.state.loading} shape="circle" />
          <Button type="primary" onClick={this.handleCloseLoading.bind(this)}>
            关闭
          </Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button icon="left" type="primary">
              返回
            </Button>
            <Button icon="right" type="primary">
              前进
            </Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrapper">
          <Radio.Group
            value={this.state.size}
            onChange={this.handleChange.bind(this)}
          >
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>
            主要按钮
          </Button>
          <Button type="dashed" size={this.state.size}>
            虚线按钮
          </Button>
          <Button type="danger" size={this.state.size}>
            警告
          </Button>
          <Button disabled size={this.state.size}>
            禁用按钮
          </Button>
        </Card>
      </div>
    )
  }
}
