import axios from "axios";

type SignUpFormData = {
  user_name: string;
  email: string;
  password: string;
  phone_num: string;
};

export async function postSignUpData(formData: FormData) {
  const data = {
    user_name: formData.get("user_name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    phone_num: formData.get("phone_num") as string,
  };

  const response = await axios.post("http://localhost:5000/api/signup", data);
  const result = response.data;
  return result;
}


export async function postLoginData(user_name:string, password:string) {
  const response = await axios.post("http://localhost:5000/api/login", { user_name, password });
  const result = response.data;
  console.log("LoginData: ", result);
  localStorage.setItem("token", result.token);
  return result;
}