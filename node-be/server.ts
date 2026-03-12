require("dotenv").config();

import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import bcrypt from "bcrypt";
import { CustomRequest } from "./model/model";
import { getUserByUsername, postUserCredentials } from "./queries";
import { verifyToken } from "./middleware/verifyToken";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the API!",
  });
});

// verifyToken is the middleware function
app.post("/api/posts", verifyToken, (req: CustomRequest, res: Response) => {
  jwt.verify(req.token!, "secretkey", (err: any, authData: any) => {
    if (err) {
      return res.status(403).json({ message: "Token is required" });
    } else {
      res.json({
        message: "Post created!",
        authData,
      });
    }
  });
});

app.post("/api/signup", (req: Request, res: Response) => {
  const { user_name, password, phone_num, email } = req.body;
  const id = Math.floor(Math.random() * 1000).toString();
  //@TODO: Before posting, need to check if the user already exists or not
  postUserCredentials({ id, user_name, password, phone_num, email });

  const user = {
    user_name,
    password,
    phone_num,
    email,
  };

  res.json({ message: "User Registered Successfully", success: true });
});

app.post("/api/login", async (req: Request, res: Response) => {
  const { user_name, password } = req.body;

  const users = await getUserByUsername(user_name);

  if (users.length === 0) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  const user = users[0];
  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  jwt.sign(
    { userId: user.id, user_name: user.user_name },
    "secretkey",
    (err: any, token?: string) => {
      if (err) {
        return res.status(500).json({ message: "Token generation failed" });
      }
      res.json({ token });
    },
  );
});

// function verifyToken(req: CustomRequest, res: Response, next: NextFunction) {
//   const bearerHeader = req.headers["authorization"];
//   if (!bearerHeader) {
//     return res.status(403).json({ message: "Token is required" });
//   } else {
//     const bearer = bearerHeader.split(" ");
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     next();
//   }
// }

app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
