import { instance } from "..";

export const getDetail = async (id:string) => {
  try {
    const data = await instance.get(`/information/details/${id}`);
    return data.data;
  } catch(err) {
    console.log("상세정보를 불러오는데 오류가 생겼습니다.");
  }
};
