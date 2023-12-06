import { instance } from "..";

export const getUserData = async () => {
  try {
    const { data } = await instance.get(
      "http://43.202.152.109:8080/manager/lists"
    );
    return data;
  } catch (err) {
    console.log(
      "부서 목록을 불러오는데 오류가 발생했습니다. 관리자에게 문의해주세요"
    );
  }
};
