import React from 'react'
import {Row, Col} from 'antd';
// import {formateDate} from '../../util/util'
import './index.less'
import axios from '../../axios'
import dayjs from 'dayjs'

export default class Header extends React.Component {
    componentWillMount() {
        setInterval(() => {
            let sysTime = dayjs().format('YYYY年M月D日 a h:mm:ss')
            this.setState({
                sysTime
            })
        }, 1000)
        this.setState({
            userName: 'EVOLUTION',
        })
        this.getWeatherAPIData()
    }

    getWeatherAPIData() {
        axios.jsonp({
            url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=a697791203dfeabbf768b084efa091c1&city=420100&extensions=all'
        }).then(res => {
            let weatherInfo = res.forecasts[0].casts[0]
            this.setState({
                weather: weatherInfo.dayweather
            })
        }).catch(err => {
            console.error(err)
        })
    }

    render() {
        return <div className='header'>
            <Row className='header-top'>
                <Col span={24}>
                    <span>欢迎，{this.state.userName}</span>
                    <span className='logout'>退出</span>
                </Col>
            </Row>
            <Row className='breadcrumb'>
                <Col span={4} className='breadcrumb-title'>
                    首页
                </Col>
                <Col span={20} className='weather'>
                    <span className='date'>{this.state.sysTime}</span>
                    <span className='weather-detail'>{this.state.weather}</span>
                </Col>
            </Row>
        </div>
    }
}
