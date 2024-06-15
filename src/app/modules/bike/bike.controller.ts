import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BikeServices } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const bikeData = req.body;
  const result = await BikeServices.createBikeIntoDB(bikeData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bike added successfully",
    data: result,
  });
});

export const BikeControllers = {
  createBike,
};
