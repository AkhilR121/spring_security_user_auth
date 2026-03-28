export type SignUpFormData = {
  user_name: string;
  email: string;
  password: string;
  phone_num: string;
};

export type User = {
  id: string;
  user_name: string;
  email: string;
  phone_num: string;
};

export type JWTAuthData = {
  userId: string;
  user_name: string;
  iat: number;
  exp: number;
};
