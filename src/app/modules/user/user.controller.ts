import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const getProfile = catchAsync(async (req: Request, res: Response) => {
  // const tokenFromAuthorization = req.headers.authorization;
  // const result = await UserService.getProfile();
  sendResponse(res, {
    success: true,
    message: "User profile retrieved successfully",
    statusCode: httpStatus.OK,
    data: null,
  });
});

export const UserController = {
  getProfile,
};
