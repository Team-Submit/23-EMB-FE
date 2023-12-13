import { UserInfoPutDataProp, UserPasswordPutProp } from "./my.type";
import { instance } from "../index";

export const UserInfoGet = async () => {
  try {
    const response = await instance.get("/users/informations");
    return response.data;
  } catch (error) {
    throw error
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
  } catch (error) {
    throw error
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
  } catch (error) {
    throw error;
  }
};
