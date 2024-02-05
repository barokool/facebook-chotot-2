import { color } from "@constants/color";
import { ROUTES } from "@constants/routes";
import { getUserLocal } from "@utils/auth";
import { USER, VEXE, localHandler } from "@utils/localStorage";
import { Dropdown, Image, MenuProps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const user = getUserLocal();

  const delUser = () => {
    localHandler.deleteKey(USER);
    localHandler.deleteKey(VEXE);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          My page
        </a>
      ),
    },
    {
      key: "1",
      label: <button onClick={() => delUser()}>Log out</button>,
    },
  ];

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
          <Dropdown menu={{ items }} placement="bottomLeft">
            <OverRightButton>{user.name}</OverRightButton>
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
  border: none;
`;
