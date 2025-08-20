
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import UserModel, { IUser } from "../models/user.model";
import mongoose from "mongoose";


export const generateToken = (user: IUser) => {
  return jwt.sign(
    { user }, // Use 'sub' and convert ObjectId to string
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }
  );
};


export interface JwtPayload {
  user: IUser;
}

export function getUserFromToken(token: string) {
  try {
    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    }
    return null;
  } catch (err) {
    return null;
  }
}


