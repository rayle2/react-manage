import React from 'react'

export default class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will props,props是' + nextProps.name)
    }

    // 一旦使用setState，就会触发这个生命周期
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should update')
        return true // 如果是false 后面生命周期就不走了
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will update')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update')
    }

    render() {
        return <div>
            <p>这是子组件，测试子组件生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}
