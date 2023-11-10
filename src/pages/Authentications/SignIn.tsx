import { ROUTES } from "@constants/routes";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LeftHalf></LeftHalf>
      <RightHalf>
        <ButtonContainer>
          <ButtonLogin
            style={{ color: "#1E418D" }}
            onClick={() => navigate(ROUTES.WITH_EMAIL)}
          >
            Log in with email
          </ButtonLogin>
          <ButtonLogin style={{ color: "#1E418D" }}>
            Log in with Google
          </ButtonLogin>

          <ButtonLogin
            style={{ color: "#1E418D" }}
            onClick={() => navigate(ROUTES.SIGN_UP)}
          >
            Register
          </ButtonLogin>
        </ButtonContainer>
      </RightHalf>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
`;

const LeftHalf = styled.div`
  flex: 1;
  background: #1e418d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightHalf = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 16px;
`;

const ButtonLogin = styled.button`
  max-width: 380px;
  width: 100%;
  border-radius: 4px;
  height: 70px;
  background: white;
  border: 1px solid #ececec;
  box-shadow: 8px 10px 0px -3px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 8px 10px 0px -3px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 8px 10px 0px -3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
  }

  font-weight: 600;
  font-size: 16px;
`;
