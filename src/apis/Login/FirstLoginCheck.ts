import { instance } from "..";

export interface LoginCredentials {
    username: string;
  }

export const LoginCheck = async ({username}: LoginCredentials) =>{
    try{
        const response = await instance.post('/users/firstLoginCheck', {userid: username});
        return response.data;
    }catch(error){
        throw error;
    }
}