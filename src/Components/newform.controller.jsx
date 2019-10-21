import React, { Component } from "react";
import { Form, DatePicker, Input, Tooltip, Icon, Checkbox, Button } from "antd";

import "antd/dist/antd.css";

const FormItem = Form.Item;

class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            confirmDirty: false,
            autoCompleteResult: []
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if (!values.agreement) {
                    return alert("Please accept the terms & conditions");
                }
                values.birthday = values.birthday.toString().slice(4, 15);
                delete values.agreement;
                return this.storageMgt(values);
            }
        });
    };

    storageMgt = async data => {
        const newUser = data;
        const allUsers = JSON.parse(localStorage.getItem("formplex")) || [];

        allUsers.push(newUser);
        localStorage.setItem("formplex", JSON.stringify(allUsers));

        this.props.form.resetFields();

        window.location.reload();
    };

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 14,
                    offset: 6
                }
            }
        };

        return (
            <div>
                <br />

                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="First Name" hasFeedback>
                        {getFieldDecorator("first_name", {
                            rules: [
                                {
                                    type: "string",
                                    required: true,
                                    message: "Please input your first name!"
                                },
                                {
                                    validator: this.checkConfirm
                                }
                            ]
                        })(<Input type="text" />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="Last Name" hasFeedback>
                        {getFieldDecorator("last_name", {
                            rules: [
                                {
                                    type: "string",
                                    required: true,
                                    message: "Please input your last name!"
                                },
                                {
                                    validator: this.checkConfirm
                                }
                            ]
                        })(<Input type="text" />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="Birthday" hasFeedback>
                        {getFieldDecorator("birthday", {
                            rules: [
                                {
                                    type: "object",
                                    required: true,
                                    message: "Please select your birthday!"
                                }
                            ]
                        })(<DatePicker showTime format="DD-MM-YYYY" />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label={
                            <span>
                Age&nbsp;
                                <Tooltip title="How old are you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
                        }
                        hasFeedback
                    >
                        {getFieldDecorator("age", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your age!",
                                    whitespace: true
                                }
                            ]
                        })(<Input />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="Hobby" hasFeedback>
                        {getFieldDecorator("hobby", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your hobby!"
                                },
                                {
                                    validator: this.checkConfirm
                                }
                            ]
                        })(<Input type="text" />)}
                    </FormItem>

                    <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                        {getFieldDecorator("agreement", {
                            valuePropName: "checked"
                        })(
                            <Checkbox>
                                I have read the <a href="http://localhost">agreement</a>
                            </Checkbox>
                        )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Create User
                        </Button>
                    </FormItem>
                </Form>

                <br />
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
