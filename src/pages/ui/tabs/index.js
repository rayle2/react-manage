import React from 'react'
import '../ui.less'
import {Card, Tabs, Icon, message} from "antd";

const TabPane = Tabs.TabPane;

export default class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    newTabIndex = 0

    componentWillMount() {
        const panes = [
            {title: 'Tab 1', content: 'Content of Tab 1', key: '1'},
            {title: 'Tab 2', content: 'Content of Tab 2', key: '2'},
            {title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false},
        ]
        this.setState({panes, activeKey: panes[0].key})
    }

    handleCallback = (key) => {
        message.info(`选择了页签${key}`)
    }

    onChange = (activeKey) => {
        this.setState({activeKey})
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({title: activeKey, content: 'Content of new Tab', key: activeKey});
        this.setState({panes, activeKey});
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({panes, activeKey});
    }

    render() {
        return (
            <div>
                <Card title='tabs' className='card-wrapper'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title='带图标tabs' className='card-wrapper'>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type='apple'></Icon>苹果</span>} key="1">apple</TabPane>
                        <TabPane tab={<span><Icon type='android'></Icon>安卓</span>} key="2">Content of Tab Pane
                            2</TabPane>
                    </Tabs>
                </Card>
                <Card title='可增减tabs' className='card-wrapper'>
                    <Tabs
                        defaultActiveKey="1"
                        type='editable-card'
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((item) => {
                                return <TabPane tab={item.title} key={item.key}>{item.content}</TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}
