import React from 'react'
import {Card, Button, notification} from 'antd'
import '../ui.less'

export default class Notices extends React.Component {

    openNotice = (type, direction) => {
        notification[type]({
            message: '操作成功',
            description: '已经成功发起请求',
            placement: direction ? direction : ''
        })
    }

    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrapper'>
                    <Button type='primary' onClick={() => this.openNotice('success', 'topLeft')}>success</Button>
                    <Button type='primary' onClick={() => this.openNotice('info', 'bottomLeft')}>info</Button>
                    <Button type='primary' onClick={() => this.openNotice('warning', 'bottomRight')}>warning</Button>
                    <Button type='primary' onClick={() => this.openNotice('error')}>error</Button>
                </Card>
            </div>
        )
    }
}
