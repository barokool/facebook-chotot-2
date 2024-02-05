import { Button, Checkbox, Form, Input, Spin, message } from "antd";
import React from "react";
import styled from "styled-components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { axiosInstance } from "configs/http/axios";
import { handleLogin } from "@utils/auth";
import { ROUTES } from "@constants/routes";

const WithEmail = () => {
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation({
    mutationFn: (values: any) => {
      return axiosInstance.post(`/auth/sign-in`, values);
    },
    onSuccess: (data: {
      data: { data: { accessToken: string; user: any } };
    }) => {
      handleLogin(data?.data?.data?.accessToken, data?.data?.data?.user);
      navigate(`${ROUTES.ALL}`);
      message.success("Login success");
    },
    onError: (error: any) => {
      message.error(`Login failed! ${error?.response?.data?.message}`);
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <Wrapper>
      {/* image go here */}
      <FormContainer>
        <h1>Log in</h1>
        {/* form login */}
        <FormOverwrite
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <ButtonLogin className="login-form-button">
              Log in {isLoading && <Spin />}
            </ButtonLogin>
            <span>
              Or <a href="/sign-up">register now!</a>
            </span>
          </Form.Item>
        </FormOverwrite>
        {/* register */}
      </FormContainer>
    </Wrapper>
  );
};

export default WithEmail;

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 20px;
    color: #1e418d;
    text-align: center;
  }
`;

const FormOverwrite = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;

const ButtonLogin = styled.button`
  max-width: 380px;
  width: 100%;
  border-radius: 20px;
  outline: none;
  height: 40px;
  background: #1e418d;
  border: 1px solid #ececec;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #284074;
  }

  font-weight: 600;
  font-size: 16px;
`;
