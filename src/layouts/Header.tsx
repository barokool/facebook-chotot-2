import { color } from "@constants/color";
import { ROUTES } from "@constants/routes";
import { getUserLocal } from "@utils/auth";
import { USER, VEXE, localHandler } from "@utils/localStorage";
import { Dropdown, Image, MenuProps, Space, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  DownOutlined,
  UserOutlined,
  DoubleLeftOutlined,
  SettingOutlined,
  HeartOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const Header = () => {
  const navigate = useNavigate();
  const user = getUserLocal();

  const delUser = () => {
    localHandler.deleteKey(USER);
    localHandler.deleteKey(VEXE);
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

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menuProps: MenuProps = {
    items,
  };

  return (
    <Container>
      <Image
        width={200}
        src="/src/assets/images/logo.png"
        preview={false}
        onClick={() => navigate(ROUTES.ALL)}
        style={{ cursor: "pointer" }}
      />

      <ButtonContainer>
        {user ? (
          <Dropdown menu={menuProps}>
            <OverRightButton>
              <Space>
                {user.name}
                <DownOutlined />
              </Space>
            </OverRightButton>
          </Dropdown>
        ) : (
          <OverRightButton onClick={() => navigate(ROUTES.SIGN_IN)}>
            Log In
          </OverRightButton>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Button = styled.button`
  background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 12px;
  height: 100%;
  width: 100px;
  transition: all 0.3s ease-in-out;

  &:hover {
  }
`;

const OverRightButton = styled(Button)`
  background: ${color.primary};
  outline: none;
  width: 100%;
  border: none;
`;
