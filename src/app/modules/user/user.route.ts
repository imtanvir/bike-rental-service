import express from "express";
import authCheck from "../../middleware/authCheck";
import { USER_ROLE } from "./user.constant";
import { UserController } from "./user.controller";

const router = express.Router();

router.get(
  "/me",
  authCheck(USER_ROLE.admin, USER_ROLE.user),
  UserController.getProfile
);

export const UserRoutes = router;
