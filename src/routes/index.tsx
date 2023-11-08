// import { ROUTES } from "@constants/routes";
// import useAuth from "@hooks/useAuth";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import { ROUTES } from "constants/routes";
import { Navigate, Outlet, Route } from "react-router-dom";

const useAuth = () => {
  return { accessToken: "" };
};
export const NotHaveAuthCheck = () => {
  const { accessToken } = useAuth();
  return accessToken ? <Navigate to={ROUTES.ALL} /> : <Outlet />;
};

export const NotHaveAuthRoute = () => {
  return (
    <>
      <Route element={<NotHaveAuthCheck />}>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      </Route>
    </>
  );
};
