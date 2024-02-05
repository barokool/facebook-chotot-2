import { UserType } from "interfaces/user";

export const VEXE = "vexe";
export const USER = "user";

export const localHandler = {
  getLocal: (key: string) => {
    return localStorage.getItem(key);
  },
  setLocal: (key: string, value: any) => {
    localStorage.setItem(key, value);
  },
  getSession: (key: string) => {
    return sessionStorage.getItem(key);
  },
  setSession: (key: string, value: any) => {
    sessionStorage.setItem(key, value);
  },
  resetStorage: () => {
    localStorage.clear();
    sessionStorage.clear();
  },
  deleteKey: (name: string) => {
    return localStorage.getItem(name)
      ? localStorage.removeItem(name)
      : sessionStorage.removeItem(name);
  },
};

/** get value local storage */
export const getLocalStorage = (name: string) => {
  return (
    (localHandler.getLocal(name) && localHandler.getLocal(name)) ||
    (localHandler.getSession(name) && localHandler.getSession(name))
  );
};

type SaveLocalStorageType = {
  data: any;
  name: string;
  type: "session" | "storage";
};
export const saveLocalStorage = ({
  data,
  name,
  type = "storage",
}: SaveLocalStorageType) => {
  if (type === "storage") {
    localHandler.setLocal(name, data);
  } else {
    localHandler.setSession(name, data);
  }
};
