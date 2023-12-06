import { instance, noTokenInstance } from "..";

export const delAccounts = async (id: string) => {
  try {
    await noTokenInstance.delete(`/manager/accounts${id}`);
  } catch (err) {
    console.log("계정 삭제에 실패했습니다. 관리자에게 문의해주세요");
  }
};
