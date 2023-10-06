//api

import { instance } from "../../apis/index";

export const UserInfoGet = async () => {
  try {
    const { data } = await instance.get("/users/informations");
    return data;
  } catch (err) {
    console.log("데이터를 갖고 오는 중에 오류가 발생하였습니다");
  }
};

export interface UserInfoPutDataProp {
  newDepartment: string;
  newUserName: string;
  newUserNumber: string;
}

export interface UserPasswordPutProp {
  password: string;
  newPassword: string;
}

export const UserInfoPut = async ({
  newDepartment,
  newUserName,
  newUserNumber,
}: UserInfoPutDataProp) => {
  try {
    const { data } = await instance.put("/users/managers", {
      newDepartment,
      newUserName,
      newUserNumber,
    });
    return data;
  } catch (err) {
    console.log("데이터를 보내는데 실패하였습니다ㅋ");
  }
};

export const UserPasswordPut = async ({
  password,
  newPassword,
}: UserPasswordPutProp) => {
  try {
    await instance.put("/users/passwords", {
      password,
      newPassword,
    });
  } catch (err) {
    console.log("비밀번호 데이터 이상해짐");
  }
};
