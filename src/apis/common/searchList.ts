import { instance } from "..";

export const getSearchList = async (name:string, birthdate:string) => {
  try {
    const { data } = await instance.get("/information/search", {}); // 아직 api 명세가 안나와서 임시 url 적어둠
    return data;
  } catch(err) {
    console.log("상세정보를 불러오는데 오류가 생겼습니다."); // 오류처리는 변경될 가능성 높음
  }
};
