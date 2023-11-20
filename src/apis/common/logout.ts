import { instance } from "..";

export const logout = async () => {
  try {
    await instance.post("/users/logout");
  } catch (err) {
    console.log("로그 아웃에 실패했습니다. 관리자에게 문의해주세요");
  }
};
