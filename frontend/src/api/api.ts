import axios from "axios";
import { JWTAuthData } from "../model/modal";

export async function postSignUpData(formData: FormData) {
  const data = {
    user_name: formData.get("user_name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    phone_num: formData.get("phone_num") as string,
  };

  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/signup`, data);
  const result = response.data;
  return result;
}

export async function postLoginData(user_name: string, password: string) {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, {
    user_name,
    password,
  });
  localStorage.setItem("token", response.data.token);
  return response.data;
}

export async function verifyToken(): Promise<{message: string, authData: JWTAuthData | null}> {
  const url  = `${import.meta.env.VITE_BASE_URL}/api/auth-test`
  const token = localStorage.getItem("token")

  if (!token) {
    console.error("No token found");
    return {message: "No token found", authData: null};
  }
  
  const response = await axios.post(url, {}, { headers: { Authorization: `Bearer ${token}` } });
  return {
    message: response.data.message,
    authData: response.data.authData
  };
}
