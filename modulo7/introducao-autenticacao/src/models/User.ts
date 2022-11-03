export type User = {
  id: string;
  email: string;
  password: string;
};

export interface InputSignUpDTO {
  email: string;
  password: string;
}

export interface InputLoginDTO {
  email: string;
  password: string;
}

export interface InputEditUserDTO {
  email: string;
  password: string;
  token: string;
}

export interface EditUserDTO {
   id: string,
   email: string;
   password: string;
 }
