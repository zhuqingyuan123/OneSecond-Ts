/* eslint-disable no-console */
import React from 'react';
import loginPng from '@/assets/loginPng.svg';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

function App() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <div className="text-[26px]">
        <div className="flex items-center justify-center">
          <img src={loginPng} alt="" className="h-[30px] overflow-hidden" />
          <div className="text-[26px] font-medium ml-[20px]">一秒快送后台管理系统</div>
        </div>
        <div className="login-content flex justify-between mt-[40px] w-[800px] h-[500px] rounded-[8px] items-start">
          <div className="w-[400px] h-[500px] flex items-center justify-center">
            <img
              src="http://192.168.121.66:8888/_nuxt/assets/images/login.png"
              alt=""
              className="w-[360px]"
            />
          </div>
          <div className="w-[400px] h-[500px] p-[40px]">
            <div>
              <div className="text-[20px] ml-[8px] text-center">账号密码登录</div>
              <div className="mt-[40px]">
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item name="username" rules={[{ required: true, message: '请输入账号!' }]}>
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="管理员账号"
                    />
                  </Form.Item>
                  <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="管理员密码"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入正确的验证码!' }]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="输入验证码"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
