import { ROUTES } from "@constants/routes";
import { Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Image width={200} src="/src/assets/images/logo.png" />

      <ButtonContainer>
        <Button onClick={() => navigate(ROUTES.SIGN_IN)}>Log In</Button>
        <OverRightButton onClick={() => navigate(ROUTES.SIGN_UP)}>
          Sign Up
        </OverRightButton>
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
  background: #ff9a00;
  outline: none;
  border: none;
`;
