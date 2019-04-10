import React from 'react'
import {Card, Button, Modal} from 'antd'
import '../ui.less'

export default class Modals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show1: false,
            show2: false,
            show3: false,
            show4: false
        }
    }

    handleOpen = (type) => {
        let obj = {}
        obj[type] = true
        this.setState(obj)
    }

    cancle = (type) => {
        let obj = {}
        obj[type] = false
        this.setState(obj)
    }

    handleConfirm = (type) => {
        Modal[type]({
            title: '确认',
            content: '你确定吗？',
            onOk() {
                console.log('ok')
            },
            onCancel() {
                console.log('cancel')
            }
        })
    }

    render() {
        // 加载任何页面前，加载hashrouter
        return (
            <div>
                <Card title='基础模态框' className='card-wrapper'>
                    <Button type='primary' onClick={() => this.handleOpen('show1')}>Open</Button>
                    <Button type='primary' onClick={() => this.handleOpen('show2')}>自定义页脚</Button>
                    <Button type='primary' onClick={() => this.handleOpen('show3')}>顶部20PX弹框</Button>
                    <Button type='primary' onClick={() => this.handleOpen('show4')}>水平垂直居中</Button>
                </Card>
                <Card title='信息确认框' className='card-wrapper'>
                    <Button type='primary' onClick={() => this.handleConfirm('confirm')}>confirm</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('info')}>info</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('success')}>success</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('warning')}>warning</Button>
                </Card>
                <Modal title='React' visible={this.state.show1} onCancel={() => this.cancle('show1')}>
                    <p>我是内容啊啊啊啊</p>
                </Modal>
                <Modal title='React' visible={this.state.show2} onCancel={() => this.cancle('show2')} okText='好的'
                       cancelText='算了'>
                    <p>我是内容啊啊啊啊</p>
                </Modal>
                <Modal style={{top: 20}} title='React' visible={this.state.show3} onCancel={() => this.cancle('show3')}>
                    <p>我是内容啊啊啊啊</p>
                </Modal>
                <Modal wrapClassName='vertical-center-modal' title='React' visible={this.state.show4}
                       onCancel={() => this.cancle('show4')}>
                    <p>我是内容啊啊啊啊</p>
                </Modal>
            </div>
        )
    }
}
