import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.send(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found!",
    error: "",
    path: req.path,
  });
};

export default notFound;
