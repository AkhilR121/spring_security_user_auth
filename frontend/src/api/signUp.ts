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

  const response = await axios.post("http://localhost:5000/api/signin", data);
  const result = response.data;
  console.log("SignUpData: ", result);

  localStorage.setItem("token", result.token);
  return result;
}
