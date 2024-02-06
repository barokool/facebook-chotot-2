import { Form, Button, Input, Radio, Tag, Select, Upload } from "antd";
import styled from "styled-components";
import { InfoCircleOutlined, UploadOutlined } from "@ant-design/icons";

import React, { useState } from "react";

const srcBanner = "https://bms.vexere.com/wp-content/uploads/2021/03/Frame.png";

type RequiredMark = boolean | "optional" | "customize";

const { Option } = Select;

//ref : https://bms.vexere.com/mo-ban-ve-tren-vexere-com?utm_source=vex&utm_medium=header&utme_campaign=referral

const BecomeBusiness = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const customizeRequiredMark = (
    label: React.ReactNode,
    { required }: { required: boolean }
  ) => (
    <>
      {required ? (
        <Tag color="error">Required</Tag>
      ) : (
        <Tag color="warning">optional</Tag>
      )}
      {label}
    </>
  );

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Wrapper>
      <Header>
        <img src={srcBanner} alt="Banner" />
      </Header>
      <Container>
        <FirstSection>
          <IntroductTextWrapper>
            <H1 style={{ color: "white" }}>
              Tăng{" "}
              <span style={{ color: "rgba(255, 216, 41, 1)" }}>
                30% lượng khách đặt vé
              </span>{" "}
              khi mở bán online trên Vexere.com ngay hôm nay!
            </H1>

            <H2>Đăng ký miễn phí và chỉ mất 1 phút để hoàn tất</H2>
          </IntroductTextWrapper>
          <FormWrapper>
            <FormContainer
              form={form}
              layout="vertical"
              initialValues={{ requiredMarkValue: requiredMark }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={
                requiredMark === "customize"
                  ? customizeRequiredMark
                  : requiredMark
              }
              onFinish={onFinish}
            >
              <h2>
                Bắt đầu lấp đầy chỗ trống trên xe của bạn với hơn 10 triệu lượt
                khách đi thành công trên Vexere
              </h2>

              <Form.Item
                label="Tên nhà xe"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                required
                tooltip={{
                  title: "Tooltip with customize icon",
                  icon: <InfoCircleOutlined />,
                }}
              >
                <Input placeholder="input placeholder" />
              </Form.Item>

              <Form.Item
                name="select"
                label="Khu vực"
                hasFeedback
                rules={[
                  { required: true, message: "Please select your country!" },
                ]}
              >
                <Select placeholder="Please select a country">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="upload"
                label="Upload"
                required
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="Minh chứng về nhà xe của bạn"
              >
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </FormContainer>
          </FormWrapper>
        </FirstSection>
      </Container>
    </Wrapper>
  );
};

export default BecomeBusiness;

const Wrapper = styled.section``;

const Container = styled.div`
  background: #2f80ed;
`;

const Header = styled.div`
  max-width: 1280px;
  padding: 20px 0;
  margin: 0 auto;

  img {
    width: 200px;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`;

const FirstSection = styled.div`
  width: 100%;
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
`;

const IntroductTextWrapper = styled.div`
  width: 60%;
`;

const FormWrapper = styled.div`
  width: 40%;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 46px;
  font-weight: 700;
  line-height: 59px;
`;

const H2 = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 38px;
`;

const FormContainer = styled(Form)`
  border-radius: 8px 8px 8px 8px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.12);
  padding: 24px;
  background: #fff;

  h2 {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
  }
`;
