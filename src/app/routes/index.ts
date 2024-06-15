import express from "express";

const router = express.Router();

const routes = [
  {
    path: "",
    route: "",
  },
];

routes.forEach((route) => {
  router.use(route.path, (req, res) => {
    // Your route handling logic here
    res.send(route.route); // or any other response
  });
});

export const Routers = router;
