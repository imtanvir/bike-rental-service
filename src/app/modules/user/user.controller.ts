import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

const createUserIntoDB = catchAsync(async (req: Request, res: Response) => {});

export const UserController = {
  createUserIntoDB,
};
