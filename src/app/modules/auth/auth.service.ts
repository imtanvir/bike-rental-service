import { UserModel } from "../user/user.model";
import { TAuthSignUp } from "./auth.interface";

const signUpUserIntoDB = async (payload: TAuthSignUp) => {
  const result = await UserModel.create(payload);
  return result;
};

export const AuthService = {
  signUpUserIntoDB,
};
