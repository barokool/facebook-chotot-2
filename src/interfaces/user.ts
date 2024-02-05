export interface UserType {
  id: number;
  email: string;
  name: string;
  level: number;
  customerType: CUSTOMER_TYPE;
  moneyWallet: number;
  phoneNumber: string;
  role: USER_ROLE;
}

export enum LEVEL_USER {
  LEVEL1 = "1",
  LEVEL2 = "2",
  LEVEL3 = "3",
}

export enum CUSTOMER_TYPE {
  BUSINESS = "BUSINESS",
  PERSONAL = "PERSONAL",
}

export enum LOGIN_TYPE {
  NORMAL = "NORMAL",
  GOOGLE = "GOOGLE",
}

export enum USER_ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}
