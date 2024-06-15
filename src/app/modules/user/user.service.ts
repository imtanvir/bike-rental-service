import { UserModel } from "./user.model";

const getProfile = async (email: string) => {
  const result = await UserModel.isUserExist(email);
  return result;
};

export const UserService = { getProfile };
