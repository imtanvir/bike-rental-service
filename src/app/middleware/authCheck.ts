import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRole } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";
import httpStatus from "http-status";
import AppError from "./AppError";

const authCheck = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    const decoded = jwt.verify(
      token as string,
      config.jwt_secret as string
    ) as JwtPayload;

    if (requiredRole && !requiredRole.includes(decoded.role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }
    console.log(decoded);
    next();
  });
};

export default authCheck;
