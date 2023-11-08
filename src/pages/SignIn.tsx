import { ROUTES } from "@constants/routes";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>SignIn</h1>
      <Button onClick={() => navigate(ROUTES.ALL)}>Back to Home</Button>
    </div>
  );
};

export default SignIn;
