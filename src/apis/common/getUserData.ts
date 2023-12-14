import { instance } from "..";

export const getUserData = async () => {
  try {
    const { data } = await instance.get("/manager/lists");
    return data;
  } catch (err) {
    console.log(
      "부서 목록을 불러오는데 오류가 발생했습니다. 관리자에게 문의해주세요"
    );
  }
};

export const getOneUserData = async (id: string) => {
  try {
    const { data } = await instance.get(`/manager/accounts/${id}`);
    return data;
  } catch (err) {
    console.log(
      "유저 정보를 불러오는데 오류가 발생했습니다. 관리자에게 문의해주세요"
    );
  }
};
