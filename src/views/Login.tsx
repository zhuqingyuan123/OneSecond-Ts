/* eslint-disable no-console */
import React from 'react';
import logo from '@/Icons/svgs/logo.svg';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import styled from 'styled-components';
import login from '@/assets/images/login.png';
import { goVerifycode, goLogin } from '@/service/loginApi';
import { useRequest } from 'ahooks';
import { useNavigate } from 'react-router-dom';

const FormField = styled.div`
  margin-top: 40px;
  .ant-form-item-control-input-content {
    display: flex;
  }
  .ant-input-affix-wrapper {
    height: 40px;
  }
  .verifyCode {
    width: 190px;
  }
`;

function Login() {
  const navigate = useNavigate();

  const { data: verifyCodeImg, run: runVerifyCodeImg } = useRequest(goVerifycode);
  const { run: RunLogin } = useRequest(goLogin, {
    manual: true,
    onSuccess: (result) => {
      if (result.data.code === 200) {
        message.success(`${result.data.msg}!`);
        navigate('/');
      } else {
        runVerifyCodeImg();
        message.error(`${result.data.msg}!`);
      }
    }
  });

  interface Ilogin {
    adminName: string;
    adminPwd: string;
    no: string;
    verifyCode: string;
  }
  const onFinish = (values: Ilogin) => {
    // console.log('Received values of form: ', values);
    RunLogin({
      adminName: values.adminName,
      adminPwd: values.adminPwd,
      no: verifyCodeImg.no,
      verifyCode: values.verifyCode
    });
    // console.log(userInfo);
  };

  // 切换验证码
  const activeIcode = () => {
    runVerifyCodeImg();
  };
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <div className="text-[26px]">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="h-[30px] overflow-hidden" />
          <div className="text-[26px] font-medium ml-[20px]">一秒快送后台管理系统</div>
        </div>
        <div className="login-content flex justify-between mt-[40px] w-[800px] h-[500px] rounded-[8px] items-start">
          <div className="w-[400px] h-[500px] flex items-center justify-center">
            <img src={login} alt="" className="w-[360px]" />
          </div>
          <div className="w-[400px] h-[500px] p-[40px]">
            <div>
              <div className="text-[20px] ml-[8px] text-center">账号密码登录</div>
              <FormField>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item name="adminName" rules={[{ required: true, message: '请输入账号!' }]}>
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="管理员账号"
                    />
                  </Form.Item>
                  <Form.Item name="adminPwd" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="管理员密码"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item
                      name="verifyCode"
                      rules={[{ required: true, message: '请输入验证码!' }]}
                    >
                      <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="输入验证码"
                        className="verifyCode "
                      />
                    </Form.Item>
                    <Form.Item>
                      <div className="cursor-pointer mt-[-10px]" onClick={activeIcode}>
                        <img
                          src={`data:image/svg+xml;base64,${btoa(verifyCodeImg?.svg)}`}
                          alt=""
                          width="150"
                          height="50"
                        />
                      </div>
                    </Form.Item>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button w-full mt-[40px] h-[40px]"
                    >
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              </FormField>
            </div>
          </div>
        </div>
        <div className="text-[12px] text-[#666666] mt-[40px] text-center">
          Copyright © 2022 包小盒 All right reserved.
        </div>
        <div className="text-[14px] text-[#333333] mt-[8px] text-center">
          浙ICP备19025175号-4 aaa浙公网安备 33010602011191号
        </div>
      </div>
    </div>
  );
}

export default Login;
