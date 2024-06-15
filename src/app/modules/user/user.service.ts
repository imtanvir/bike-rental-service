import { UserModel } from "./user.model";

const getProfile = async (email: string) => {
  const result = await UserModel.isUserExist(email);
  return result;
};

const updateProfile = async (_id: string, payload: Record<string, unknown>) => {
  const result = await UserModel.findByIdAndUpdate({ _id }, payload, {
    new: true,
  });

  return result;
};

export const UserService = { getProfile, updateProfile };
