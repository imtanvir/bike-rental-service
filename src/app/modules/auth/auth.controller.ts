import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const signUpUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await AuthService.signUpUserIntoDB(userData);
  // remove password field from response due to security purpose even its value now empty.
  const userResponse = { ...result.toObject(), password: undefined };
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully!",
    data: userResponse,
  });
});

export const AuthController = {
  signUpUser,
};
