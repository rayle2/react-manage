import React from 'react'
import '../ui.less'
import {Card, Button, message} from "antd";

export default class Messages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    showMessage = (type) => {
        message[type]('恭喜你，获取成功')
    }

    render() {
        return (
            <div>
                <Card title='全局提示框' className='card-wrapper'>
                    <Button type='primary' onClick={() => this.showMessage('success')}>success</Button>
                    <Button type='primary' onClick={() => this.showMessage('info')}>info</Button>
                    <Button type='primary' onClick={() => this.showMessage('warning')}>warning</Button>
                    <Button type='primary' onClick={() => this.showMessage('error')}>error</Button>
                    <Button type='primary' onClick={() => this.showMessage('loading')}>loading</Button>
                </Card>
            </div>
        )
    }
}
