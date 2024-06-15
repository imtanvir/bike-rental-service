import express from "express";
import authCheck from "../../middleware/authCheck";
import requestValidation from "../../middleware/requestValidation";
import { USER_ROLE } from "../user/user.constant";
import { BikeControllers } from "./bike.controller";
import { BikeValidationSchema } from "./bike.validation";

const router = express.Router();

router.post(
  "/",
  authCheck(USER_ROLE.user),
  requestValidation(BikeValidationSchema.bikeValidationSchema),
  BikeControllers.createBike
);
export const BikesRoutes = router;
