import { useState } from "react";
import { Button } from "../../../../styles/common/Button";
import * as S from "./style";
import { Input } from "../../../common/Input";
import { Tab } from "../../../common/Tab";
import { EachTab } from "../../../common/Tab/EachTab";

export const PassWord = () => {
  const [nowValue, nowSetValue] = useState("");
  const [newValue, newSetValue] = useState("");
  const [reValue, reSetValue] = useState("");
  const nowPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    nowSetValue(e.target.value);
  };
  const NewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    newSetValue(e.target.value);
  };
  const ReNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    reSetValue(e.target.value);
  };
  return (
    <S.Background>
      <S.passwordTabWarp>
        <EachTab selected={true} value="비밀번호 변경" />
        <Tab
          list={[
            {
              text: "개인정보 수정",
              link: "/my/profile",
              path: "/my/password",
            },
          ]}
          selected="지금 선택된 경로 문자로"
        />
      </S.passwordTabWarp>
      <S.PassWordWarp>
        <S.PassWordText>비밀번호 변경</S.PassWordText>
        <Input
          value={nowValue}
          onChange={nowPassword}
          label="현재 비밀번호"
          bottomMessage="비밀번호 다시 확인 바람"
          error
        />
        <Input
          value={newValue}
          onChange={NewPassword}
          label="새 비밀번호"
          bottomMessage="길이는 8 ~ 30자 이내여야 합니다"
          type="password"
        />
        <Input
          value={reValue}
          placeholder="새 비밀번호를 다시 한 번 입력해 주세요"
          onChange={ReNewPassword}
          label="새 비밀번호 확인"
          type="password"
        />
        <Button size="XL" colorType="Point">
          완료
        </Button>
      </S.PassWordWarp>
    </S.Background>
  );
};
