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

router.put(
  "/me",
  authCheck(USER_ROLE.admin, USER_ROLE.user),
  UserController.updateProfile
);
export const UserRoutes = router;
