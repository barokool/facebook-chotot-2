import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  DownOutlined,
  UserOutlined,
  DoubleLeftOutlined,
  SettingOutlined,
  HeartOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Image,
  MenuProps,
  message,
  Space,
  Tabs,
  Tooltip,
} from "antd";

const { TabPane } = Tabs;

const LayoutFeed = () => {
  return (
    <Wrapper>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Wrapper>
  );
};

export default LayoutFeed;

const Wrapper = styled.section``;

const OutletWrapper = styled.div``;

const Header = () => {
  const navigate = useNavigate();

  function callback(key: any) {
    console.log(key);
  }

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "Profile",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Settings",
      key: "2",
      icon: <SettingOutlined />,
    },
    {
      label: "Logout",
      key: "3",
      icon: <DoubleLeftOutlined />,
      danger: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const itemsCategory = [
    {
      label: "Feed",
      key: "1",
      icon: <HomeOutlined />,
      route: "/trending",
    },

    {
      label: "Favourite",
      key: "2",
      icon: <HeartOutlined />,
      route: "/favourite",
    },
  ];

  return (
    <WrapperHeader>
      <Image preview={false} width={200} src="/src/assets/images/logo.png" />
      {/* category */}
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        size={"large"}
        animated={false}
      >
        {itemsCategory.map((item) => (
          <TabPane
            tab={
              <span onClick={() => navigate(item.route)}>
                {item.icon}
                {item.label}
              </span>
            }
            key={item.key}
          />
        ))}
      </Tabs>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            Sara Jones
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </WrapperHeader>
  );
};

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  border: 0.951px solid #ececec;
  background: #fff;
  box-shadow: 32px 24px 100px 0px rgba(24, 24, 24, 0.1);
`;
