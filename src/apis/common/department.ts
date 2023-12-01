import { instance } from "..";

export const getDepartment = async () => {
  try {
    const result = await instance.get("/users/infromations");
    return result.data;
  } catch(err) {
    console.log("부서 목록을 불러오는데 오류가 발생했습니다. 관리자에게 문의해주세요");
  }
};
