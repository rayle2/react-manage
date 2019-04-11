import React from 'react'
import {Card, Spin, Icon, Alert} from 'antd'
import '../ui.less'

export default class Loading extends React.Component {

    render() {
        const icon = <Icon type='loading' style={{fontSize: 24}}/>
        return (
            <div>
                <Card title='spin用法' className='card-wrapper'>
                    <Spin size='large'></Spin>
                    <Spin style={{margin: '0 10px'}}></Spin>
                    <Spin size='small'></Spin>
                    <Spin style={{marginLeft: '10px'}} indicator={icon}></Spin>
                </Card>
                <Card title='内容遮罩' className='card-wrapper'>
                    <Alert message='EVO' description='欢迎来到本网站' type='info'></Alert>
                    <Alert message='EVO' description='欢迎来到本网站' type='warning'></Alert>
                    <Spin>
                        <Alert message='EVO' description='欢迎来到本网站' type='warning'></Alert>
                    </Spin>
                    <Spin tip='加载中...' indicator={icon}>
                        <Alert message='EVO' description='欢迎来到本网站' type='warning'></Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}
