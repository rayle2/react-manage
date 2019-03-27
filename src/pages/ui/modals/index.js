import React from 'react'
import {Card, Button, Modal} from 'antd'
import '../ui.less'

export default class Modals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show1: false
        }
    }

    handleOpen = (type) => {
        let obj = {}
        obj[type] = true
        this.setState(obj)
    }

    render() {
        // 加载任何页面前，加载hashrouter
        return (
            <div>
                <Card title='基础模态框' className='card-wrapper'>
                    <Button type='primary' onClick={() => this.handleOpen('show1')}>Open</Button>
                    <Button type='primary'>自定义页脚</Button>
                    <Button type='primary'>顶部20PX弹框</Button>
                    <Button type='primary'>水平垂直居中</Button>
                </Card>
                <Modal title='React' visible={this.state.show1}>
                    <p>我是内容啊啊啊啊</p>
                </Modal>
            </div>
        )
    }
}
