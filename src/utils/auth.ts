import { UserType } from "interfaces/user";
import { USER, VEXE, getLocalStorage, saveLocalStorage } from "./localStorage";

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

export const getUserLocal = (): UserType | null => {
  let user: UserType | null = null;
  try {
    user = JSON.parse(getLocalStorage(USER) || "");
  } catch (err) {
    /* empty */
  }

  return user;
};
