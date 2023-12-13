import { instance } from '..';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  um: boolean;
}

export const loginResponse = async ({username, password}: LoginCredentials) => {
  try {
    const response = await instance.post(`/auth/login`, {id: username, password: password});
    return response.data;
  } catch (error) {
    throw error;
  }
};