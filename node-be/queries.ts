import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise();


export async function getUserByUsername(user_name: string) {
  const [rows] = await pool.query(
    "SELECT * FROM user_credentials WHERE user_name = ?",
    [user_name],
  );
  return rows as any[];
}

export async function postUserCredentials(params: {
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