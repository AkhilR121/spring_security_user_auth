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
