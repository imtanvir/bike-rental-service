import express from "express";
import authCheck from "../../middleware/authCheck";
import { USER_ROLE } from "../user/user.constant";
import { BikeControllers } from "./bike.controller";

const router = express.Router();

router.post("/", authCheck(USER_ROLE.admin), BikeControllers.createBike);
export const BikesRoutes = router;
