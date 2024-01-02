import { instance } from "..";
import { issuedDateProps } from "./admin.type";
import { modifyDateProps } from "./admin.type";

export const issuedDate = async ({ id, password }: issuedDateProps) => {
  try {
    await instance.post("/manager/accounts", {
      id,
      password,
    });
  } catch (err) {
    throw err
  }
};

export const modifyDate = async (edit: modifyDateProps, id: string) => {
  try {
    await instance.patch(`/manager/accounts/${id}`, edit);
  } catch (err) {
    console.log("수정하는데 오류가 발생했습니다. 관리자에게 문의해주세요.");
  }
};

export const deleteDate = async () => {
  try {
    await instance.delete("/users/accounts");
  } catch (err) {
    console.log("삭제하는데 실패하였습니다.");
  }
};
