import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BikesRoutes } from "../modules/bike/bike.route";
import { RentalRoutes } from "../modules/booking/booking.route";
import { UserRoutes } from "../modules/user/user.route";

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
  {
    path: "/rentals",
    route: RentalRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export const Routers = router;
