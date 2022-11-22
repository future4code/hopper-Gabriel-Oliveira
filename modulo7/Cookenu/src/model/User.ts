export enum USER_ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLE;
};

export type AuthenticationData = {
  id: string;
  role: string;
};

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
  role: USER_ROLE;
}

export interface InputLoginDTO {
  email: string;
  password: string;
}

export interface InputSearchProfile{
  token: string,
  id: string
}