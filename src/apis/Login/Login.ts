import { instance } from '..';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export const loginResponse = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await instance.post("/user/login", credentials);

    return response.data as LoginResponse;
  } catch (error) {
    throw error;
  }
};