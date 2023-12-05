import { instance } from "..";

const router = "/users";

type DepatmentListType = {
  deparment: string[];
};

export const getDepartment = async (): Promise<DepatmentListType> => {
  try {
    const { data } = await instance.get(`${router}/token/departmentLists`);
    return data;
  } catch (err) {
    console.log(
      "부서 목록을 불러오는데 오류가 발생했습니다. 관리자에게 문의해주세요"
    );
    return { deparment: [] };
  }
};
