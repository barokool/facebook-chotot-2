import { UserType } from "interfaces/user";
import { USER, VEXE, saveLocalStorage } from "./localStorage";

export const handleLogin = (
  accessToken: string,
  user: UserType,
  remember = false
) => {
  saveLocalStorage({
    data: accessToken,
    name: VEXE,
    type: remember ? "storage" : "session",
  });

  saveLocalStorage({
    data: JSON.stringify(user),
    name: USER,
    type: remember ? "storage" : "session",
  });
};
