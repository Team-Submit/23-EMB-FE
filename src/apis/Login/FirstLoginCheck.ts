import { instance } from "..";

export interface LoginCredentials {
    username: string;
  }

export const LoginCheck = async ({username}: LoginCredentials) =>{
    try{
        const response = await instance.patch('/users/firstLoginCheck', {userid: username});
        return response.data;
    }catch(error){
        alert("관리자에게 문의해주세요");
    }
}