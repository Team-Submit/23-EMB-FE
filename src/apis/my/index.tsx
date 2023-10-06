import { UserInfoPutDataProp, UserPasswordPutProp } from "./my.type";
import { instance } from "../index";

export const UserInfoGet = async () => {
  try {
    const { data } = await instance.get("/users/informations");
    return data;
  } catch (err) {
    console.log("데이터를 갖고 오는 중에 오류가 발생하였습니다");
  }
};

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
    console.log("데이터를 보내는데 실패하였습니다");
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
    console.log("비밀번호 변경 중 오류가 발생하였습니다");
  }
};
