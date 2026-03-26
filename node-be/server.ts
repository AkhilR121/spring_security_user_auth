require("dotenv").config();

import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
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
app.post("/api/auth-test", verifyToken, (req: CustomRequest, res: Response) => {
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

app.post("/api/signup", async (req: Request, res: Response) => {
  const { user_name, password, phone_num, email } = req.body;
  const id = uuidv4();

  const users = await getUserByUsername(user_name);

  //Validation if user already exists
  if(users.length > 0) {
    return res.status(400).json({ message: "User already exists" });
  }
  postUserCredentials({ id, user_name, password, phone_num, email });

  res.json({ message: "User Registered Successfully", success: true });
});

app.post("/api/login", async (req: Request, res: Response) => {
  const { user_name, password } = req.body;

  const users = await getUserByUsername(user_name);

  //UserName validation
  if (users.length === 0) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const user = users[0];
  //Password validation
  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  jwt.sign(
    { userId: user.id, user_name: user.user_name },
    "secretkey",
    { expiresIn: "1h" },
    (err: any, token?: string) => {
      if (err) {
        return res.status(500).json({ message: "Token generation failed" });
      }
      res.json({ token });
    },
  );
});

app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
