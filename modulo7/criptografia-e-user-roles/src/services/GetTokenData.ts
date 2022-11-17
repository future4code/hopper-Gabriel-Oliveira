import * as jwt from "jsonwebtoken";
import { CustomError } from "../error/CustomError";
import { Unauthorized } from "../error/Unauthorized";
import { AuthenticationData } from "../models/AuthenticationData";

export const GetTokenData = (token: string): AuthenticationData => {
  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as AuthenticationData;
    const result = {
      id: payload.id,
    };
    return result;
  } catch (error: any) {
    throw new Unauthorized();
  }
};
