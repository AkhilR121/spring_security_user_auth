import mysql from "mysql2";
import { User } from "./model/model";

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise();


export async function getUserByUsername(user_name: string):  Promise<User[]> {
  const [rows] = await pool.query(
    "SELECT * FROM user_credentials WHERE user_name = ?",
    [user_name],
  );
  return rows as User[];
}

export async function postUserCredentials(params: User) {
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