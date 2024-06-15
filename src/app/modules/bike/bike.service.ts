import { TBike } from "./bike.interface";
import { BikeModel } from "./bike.model";

const createBikeIntoDB = async (payload: TBike) => {
  const result = await BikeModel.create(payload);
  return result;
};

export const BikeServices = {
  createBikeIntoDB,
};
