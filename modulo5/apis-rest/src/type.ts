export enum ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
  }
 
export type Users = {
  id: number,
  name: string,
  email: string,
  type: ROLES,
  age: number,
}