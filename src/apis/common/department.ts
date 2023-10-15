import { instance } from ".";

export const getDepartment = async () => {
  try {
    const { data } = await instance.get("/뒤에올url언제알려주냐백엔드"); // 아직 api 명세가 안나와서 임시 url 적어둠
    return data;
  } catch (err) {
    console.log(
      "부서 목록을 불러오는데 오류가 발생했습니다. 관리자에게 문의해주세요"
    ); // 오류처리는 변경될 가능성 높음
  }
};
