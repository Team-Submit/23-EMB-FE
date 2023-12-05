import { UserInfoPutDataProp, UserPasswordPutProp } from "./my.type";
import { instance } from "../index";

export const UserInfoGet = async () => {
  try {
    const response = await instance.get("/users/informations");
    return response.data;
  } catch (err) {
    console.log(
      "개인 정보를 불러오는데 오류가 발생했습니다. 관리자에게 문의해주세요"
    );
  }
};

export const UserInfoPut = async ({
  newDepartment,
  newUserName,
  newUserNumber,
}: UserInfoPutDataProp) => {
  try {
    const { data } = await instance.patch("/users/managers", {
      department: newDepartment,
      userName: newUserName,
      userNumber: newUserNumber,
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
    await instance.patch("/users/passwords", {
      password: password,
      newPassword: newPassword,
    });
  } catch (err) {
    console.log("비밀번호 변경 중 오류가 발생하였습니다");
  }
};
