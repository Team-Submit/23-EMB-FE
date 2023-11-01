import { instance } from "..";

export const delAccounts = async () => {
  try {
    await instance.delete("/manager/accounts");
  } catch (err) {
    console.log("계정 삭제에 실패했습니다. 관리자에게 문의해주세요");
  }
};
