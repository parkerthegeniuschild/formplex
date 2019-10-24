import React, {useEffect, useState} from "react";
import {Button, Checkbox, DatePicker, Form, Icon, Input, Tooltip} from "antd";
import {addNewUser, listAllUsers} from '../actions/user.action';
import {useDispatch} from 'react-redux';
import "antd/dist/antd.css";

const FormItem = Form.Item;

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

const RegistrationForm = (props) => {

    const [ confirmDirty ] = useState(false);
    const { getFieldDecorator } = props.form;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listAllUsers());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();

        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if (isNaN(values['age']) || values['age'] < 1) {
                    return alert('Age must be a valid number');
                }

                if (values["agreement"]) {
                    values.birthday = values.birthday.toString().slice(4, 15);
                    delete values["agreement"];
                    return storageMgt(values);
                }

                return alert("Please accept the terms and conditions");
            }
        });
    };

     const storageMgt = async (data) => {
         dispatch(addNewUser(data));
         props.form.resetFields();
    };

     const checkConfirm = (rule, value) => {
        const form = props.form;
        if (value && confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
    };

    return (
        <div className="form-container"> <br />
            <Form onSubmit={handleSubmit}>
                <FormItem {...formItemLayout} label="First Name" hasFeedback>
                    {getFieldDecorator("first_name", {
                        rules: [
                            {
                                type: "string",
                                required: true,
                                message: "Please input your first name!"
                            },
                            {
                                validator: checkConfirm()
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
                                validator: checkConfirm()
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
                    })(<DatePicker format="DD-MM-YYYY" />)}
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

                <FormItem {...formItemLayout} label={
                    <span>
            Hobby&nbsp;
                        <Tooltip title="What do you do for fun?">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
                } hasFeedback>
                    {getFieldDecorator("hobby", {
                        rules: [
                            {
                                type: "string",
                                required: true,
                                message: "Please input your hobby!"
                            },
                            {
                                validator: checkConfirm()
                            }
                        ]
                    })(<Input type="text" />)}
                </FormItem>

                <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                    {getFieldDecorator("agreement", {
                        valuePropName: "checked"
                    })(
                        <Checkbox>
                            I have read the <a href={window.location.href}>agreement</a>
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
};

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
