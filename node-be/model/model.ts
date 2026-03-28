import { Request } from 'express';

export interface CustomRequest extends Request {
    token?: string;
}

export interface User {
    id: string;
    user_name: string;
    password: string;
    phone_num: string;
    email: string;
}

export type VerifyAuthData = {
    userId: string;
    user_name: string;
    iat: number;
    exp: number;
}