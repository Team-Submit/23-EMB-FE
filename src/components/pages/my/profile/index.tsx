import { useState } from "react";
import { Button } from "../../../../styles/common/Button";
import { Input } from "../../../common/Input";
import { Tab } from "../../../common/Tab";
import { EachTab } from "../../../common/Tab/EachTab";
import * as S from "./style";

export const Proflie = () => {
  const [nameValue, nameSetValue] = useState("");
  const [callValue, callSetValue] = useState("");
  const [partValue, partSetValue] = useState("");
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameSetValue(e.target.value);
  };
  const changecall = (e: React.ChangeEvent<HTMLInputElement>) => {
    callSetValue(e.target.value);
  };
  const changePart = (e: React.ChangeEvent<HTMLInputElement>) => {
    partSetValue(e.target.value);
  };

  return (
    <S.Background>
      <S.profileTabWarp>
        <Tab
          list={[
            {
              text: "비밀번호 변경",
              link: "/my/password",
              path: "/my/password",
            },
          ]}
          selected="지금 선택된 경로 문자로"
        />
        <EachTab selected={true} value="개인정보 수정" />
      </S.profileTabWarp>
      <S.profileInputWarp>
        <S.personalText>개인정보 수정</S.personalText>
        <Input value={nameValue} onChange={changeName} label="이름" />
        <Input value={callValue} onChange={changecall} label="연락처" />
        <Input value={partValue} onChange={changePart} label="부서" />
        <Button size="XL" colorType="Point">
          완료
        </Button>
      </S.profileInputWarp>
    </S.Background>
  );
};
