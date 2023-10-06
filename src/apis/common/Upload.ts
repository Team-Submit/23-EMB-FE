import { instance } from "..";

interface UploadDataType{
    uploadName: string;
    birthdate: string;
    address: string;
    firstTenure: string;
    lastTenure: string;
    occupation: string;
}

export const PostUpload = async ({uploadName, birthdate, address, firstTenure, lastTenure, occupation}:UploadDataType) => {
    try {
      await instance.post("/information/personals"); // 아직 api 명세가 안나와서 임시 url 적어둠
    } catch(err) {
      console.log("인적사항 입력이 잘못되었습니다."); // 오류처리는 변경될 가능성 높음
    }
  };
  