import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRole } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";

const authCheck = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (token === "" || !token) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        statusCode: 401,
        message: "You are unauthorized!",
      });
    }

    // Verify Token and retrieve data from it
    const decoded = jwt.verify(
      token as string,
      config.jwt_secret as string
    ) as JwtPayload;
    if (requiredRole && !requiredRole.includes(decoded.role)) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        statusCode: 401,
        message: "You have no access to this route",
      });
    }

    req.user = decoded;
    next();
  });
};

export default authCheck;
