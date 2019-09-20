import React from 'react'
import {
    Card,
    Form,
    Input,
    Button,
    message,
    Icon,
    Checkbox,
    Radio,
    Select,
    Switch,
    DatePicker,
    TimePicker,
    InputNumber
} from 'antd'
import moment from 'moment'
import '../form.less'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const {Option} = Select
const {TextArea} = Input

class FormRegister extends React.Component {
    // handleSubmit = () => {
    //     let userInfo = this.props.form.getFieldsValue()
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             message.success(`${userInfo.userName} 当前密码为${userInfo.passWord}`)
    //         }
    //     })
    // }

    render() {
        const {getFieldDecorator} = this.props.form
        // 分别指定label和输入控件的col长度。
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        return (
            <div>
                <Card title='注册表单'>
                    <Form layout='horizontal'>
                        <FormItem label='用户名' {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 5, max: 10, message: '长度不正确'
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: '用户名必须为字母或数字'
                                        }
                                    ]
                                })(
                                    <Input placeholder='请输入用户名'/>
                                )
                            }
                        </FormItem>
                        <FormItem label='密码' {...formItemLayout}>
                            {
                                getFieldDecorator('passWord', {
                                    initialValue: '',
                                })(
                                    <Input type='password' placeholder='请输入密码'/>
                                )
                            }
                        </FormItem>
                        <FormItem label='性别' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='2'>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label='年龄' {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18,
                                })(
                                    <InputNumber/>
                                )
                            }
                        </FormItem>
                        <FormItem label='当前状态' {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '2',
                                })(
                                    <Select>
                                        <Option value='1'>月薪2K</Option>
                                        <Option value='2'>月薪3K</Option>
                                        <Option value='3'>月薪6K</Option>
                                        <Option value='4'>月薪8K</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='爱好' {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['1', '2', '3', '4'],
                                })(
                                    <Select mode='multiple'>
                                        <Option value='1'>唱</Option>
                                        <Option value='2'>跳</Option>
                                        <Option value='3'>RAP</Option>
                                        <Option value='4'>篮球</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='婚否' {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                        <FormItem label='生日' {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('1991-07-27')
                                })(
                                    <DatePicker showTime format='YYYY-MM-DD HH:mm:ss'/>
                                )
                            }
                        </FormItem>
                        <FormItem label='联系地址' {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '武汉'
                                })(
                                    <TextArea autosize={{minRows: 1}}/>
                                )
                            }
                        </FormItem>
                        <FormItem label='早起时间' {...formItemLayout}>
                            {
                                getFieldDecorator('time', {
                                })(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister);
