import axios from "axios";

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
