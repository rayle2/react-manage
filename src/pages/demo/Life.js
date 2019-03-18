import React from 'react'
import Child from './Child'
import {Button, Input} from "antd";
// import "antd/dist/antd.less";
import './index.less'

export default class Life extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAdd() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <div className='content'>
            <p>React生命周期介绍</p>
            <Input/>
            <Button onClick={this.handleAdd.bind(this)}>点击一下</Button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}/>
        </div>
    }
}
