import * as jwt from "jsonwebtoken";
import { Unathorized } from "../error/Unauthorized";
import { AuthenticationData } from "../model/User";

export class Authenticator {
  public generateToken = async ({ id, role }: AuthenticationData) => {
    const token = jwt.sign({ id, role }, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  };

  public getTokenData = async (token: string) => {
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
      ) as AuthenticationData;
      const result = {
        id: payload.id,
        role: payload.role,
      };
      return result;
    } catch (error: any) {
      throw new Unathorized();
    }
  };
}
