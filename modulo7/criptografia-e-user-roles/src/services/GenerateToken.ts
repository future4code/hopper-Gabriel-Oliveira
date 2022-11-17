import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../models/AuthenticationData"


export const generateToken = ({id}: AuthenticationData): string => {
    const token = jwt.sign( 
        { id }, 
        process.env.JWT_KEY as string, 
        { expiresIn : process.env.JWT_EXPIRES_IN})

    return token
}