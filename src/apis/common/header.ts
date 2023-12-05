import { instance } from "..";

export const getDepartment = async () => {
  try {
    const response = await instance.get("/users/informations");
    return response.data;
  } catch (err) {
    console.log(
      "개인 정보를 불러오는데 오류가 발생했습니다. 관리자에게 문의해주세요"
    );
  }
};
