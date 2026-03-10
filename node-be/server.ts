require("dotenv").config();

import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import mysql, { ResultSetHeader } from "mysql2";
import { CustomRequest } from "./model/model";

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise();

async function getUserCredentials() {
  return await pool.query("SELECT * FROM user_credentials");
}

async function postUserCredentials(params: {
  id: string;
  user_name: string;
  password: string;
  phone_num: string;
  email: string;
}) {
  const [result] = await pool.query(
    "INSERT INTO user_credentials (id, user_name, email, password, phone_num) VALUES (?, ?, ?, ?, ?)",
    [
      params.id,
      params.user_name,
      params.email,
      params.password,
      params.phone_num,
    ],
  );

  return result;
}

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

app.post("/api/signin", (req: Request, res: Response) => {
  const { user_name, password, phone_num, email } = req.body;
  const id = Math.floor(Math.random() * 100).toString();
  //@TODO: Before posting, need to check if the user already exists or not
  postUserCredentials({ id, user_name, password, phone_num, email });

  const user = {
    user_name,
    password,
    phone_num,
    email,
  };

  jwt.sign({ user }, "secretkey", (err: any, token?: string) => {
    res.json({ token });
  });
});

function verifyToken(req: CustomRequest, res: Response, next: NextFunction) {
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

app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
