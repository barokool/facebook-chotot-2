import { Checkbox, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const { Option } = Select;

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/auth-with-email");
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue={"84"}>
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Wrapper>
      {/* image go here */}
      <FormContainer>
        <h1>Register</h1>
        {/* form register */}
        <FormOverwrite
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <FlexContainer>
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </FlexContainer>

          <Form.Item
            name="email"
            // label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="phone"
            // label="Phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
                type: "number",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
              placeholder="Input your phone"
            />
          </Form.Item>

          <Form.Item
            name="password"
            // label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Input your password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            // label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Input your confirm password" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <ButtonLogin>Sign up</ButtonLogin>
        </FormOverwrite>
      </FormContainer>
    </Wrapper>
  );
};

export default SignUp;

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

const FlexContainer = styled.div`
  display: flex;
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
