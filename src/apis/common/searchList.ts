import { instance } from "..";

export interface SearchList{
  name: string;
  birthdate: string;
}

export const getSearchList = async ({name, birthdate}:SearchList) => {
  try {
    const response = await instance.get(`/information/search?name=${name}&birthdate=${birthdate}`);
    return response.data;
  } catch(err) {
    console.log("목록을 불러오는데 오류가 생겼습니다.");
  }
};
