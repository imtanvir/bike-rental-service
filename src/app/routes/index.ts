import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { BikesRoutes } from "../modules/bike/bike.route";

const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/bikes",
    route: BikesRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export const Routers = router;
