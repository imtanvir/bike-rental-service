import express from "express";
import requestValidation from "../../middleware/requestValidation";
import { AuthController } from "./auth.controller";
import { AuthValidationSchema } from "./auth.validation";

const router = express.Router();

router.post(
  "/signup",
  requestValidation(AuthValidationSchema.signUpValidationSchema),
  AuthController.signUpUser
);

export const AuthRoutes = router;
