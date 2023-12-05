import { instance } from "..";

export interface UploadDataType{
  name: string;
  birthdate: string;
  address: string;
  firstTenure: string;
  lastTenure: string;
  occupation: string;
}

export const PostUpload = async ({name, birthdate, address, firstTenure, lastTenure, occupation}:UploadDataType) => {
    try {
      await instance.post("/information/personals", {
        name: name, 
        birthdate: birthdate, 
        address: address, 
        firstTenure: firstTenure, 
        lastTenure: lastTenure, 
        occupation: occupation,
      });
    } catch(err) {
      console.log("인적사항 입력이 잘못되었습니다.");
    }
  };
  