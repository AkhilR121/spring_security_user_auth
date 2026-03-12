import { Response, NextFunction } from "express";
import { CustomRequest } from "../model/model";

export function verifyToken(req: CustomRequest, res: Response, next: NextFunction) {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) {
    return res.status(403).json({ message: "Token is required" });
  } else {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }
}
