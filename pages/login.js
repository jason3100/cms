import React from 'react';
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login() {
  // const NormalLoginForm = () => {
  //   const onFinish = (values) => {
  //     console.log('Received values of form: ', values);
  //   };

    return (
      <div className = 'main'>

        <h1 className = 'title'>Course Management Assistant</h1>

        <Form.Item rules={[{ required: true }]}>
            <Radio.Group>
              <Radio.Button value="student">Student</Radio.Button>
              <Radio.Button value="teacher">Teacher</Radio.Button>
              <Radio.Button value="manager">Manager</Radio.Button>
            </Radio.Group>
        </Form.Item>

        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        >
        
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Please input Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Please input password"
          />

        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
        </Form.Item>
        <Form.Item>
          No account? <a href="">Sign up</a>
        </Form.Item>
      </Form>
      </div>
      
    )

}

