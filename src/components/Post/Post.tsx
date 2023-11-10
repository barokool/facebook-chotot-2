import { Divider, Input } from "antd";
import React, { ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const Post = () => {
  const [search, setSearch] = useState("");

  const onSearch = (value: any) => {
    //set state to search
    // setSearch(value);
    setSearch(value?.target?.value);
  };

  return (
    <Wrapper>
      {/* content */}
      <Content>This is my first pos</Content>
      <Author>
        <Avatar />
        <p>Carla Wildner</p>
      </Author>

      <Flex>
        <Divider style={{ margin: 0 }} />

        <NumbersContainer>
          <Text>16 likes</Text>
          <Text>Views 64k</Text>
          <Text>3 days ago</Text>
        </NumbersContainer>

        <Divider style={{ margin: 0 }} />
      </Flex>
      <Input
        onChange={onSearch}
        addonAfter={suffix}
        placeholder="Write Comment"
      />
      {/* author  */}
      {/* numbers row */}
      {/* actions */}
      {/* comment */}
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.div`
  border: 0.951px solid #ececec;
  background: #fff;
  box-shadow: 32px 24px 100px 0px rgba(24, 24, 24, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Content = styled.p`
  color: #484848;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
`;

const Avatar = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 26px;
  flex-shrink: 0;
  background: black;
`;

const Author = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  p {
    font-size: 12px;
  }
`;

const Text = styled.p`
  color: #6a6a6a;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
