import { User } from './user';

export interface LoginRequest {
  username?: string;
  email?: string;
  password: string;
}

export interface RegisterRequest {
  username?: string;
  name?: string;
  full_name?: string;
  email: string;
  password: string;
  phone_number?: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token?: string;
  user: User;
}

export interface AuthError {
  detail: string;
}
