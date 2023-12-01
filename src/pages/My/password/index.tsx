import { useState, useEffect } from "react";
import { Button } from "../../../styles/common/Button";
import * as S from "./style";
import { Input } from "../../../components/common/Input";
import { Tab } from "../../../components/common/Tab";
import { UserPasswordPut } from "../../../apis/my/index";
import useTitle from "../../../hooks/useTitle";

interface changePasswordType {
  password: string;
  newPassword: string;
  rePassword: string;
}

export const PassWord = () => {
  const [changePassword, setChangePassword] = useState<changePasswordType>({
    password: "",
    newPassword: "",
    rePassword: "",
  });

  useTitle('비밀번호 변경')

  const putData = () => {
    try {
      UserPasswordPut({ ...changePassword });
    } catch (err) {
      console.log("비밀번호 변경을 실패했습니다");
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setChangePassword({
      ...changePassword,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(changePassword);
  }, [changePassword]);

  return (
    <S.Background>
      <S.passwordTabWarp>
        <Tab
          list={[
            {
              text: "비밀번호 변경",
              link: "/my/password",
              path: "/my/password",
            },
          ]}
          selected="/my/password"
        />
        <Tab
          list={[
            {
              text: "개인정보 수정",
              link: "/my/profile",
              path: "/my/profile",
            },
          ]}
          selected=""
        />
      </S.passwordTabWarp>
      <S.PassWordWarp>
        <S.PassWordText>비밀번호 변경</S.PassWordText>
        <Input
          value={changePassword.password}
          onChange={onChangePassword}
          label="현재 비밀번호"
          bottomMessage="비밀번호 다시 확인 바람"
          name="password"
          error
        />
        <Input
          value={changePassword.newPassword}
          onChange={onChangePassword}
          label="새 비밀번호"
          bottomMessage="길이는 8 ~ 30자 이내여야 합니다"
          type="password"
          name="newPassword"
        />
        <Input
          value={changePassword.rePassword}
          placeholder="새 비밀번호를 다시 한 번 입력해 주세요"
          onChange={onChangePassword}
          label="새 비밀번호 확인"
          type="password"
          name="rePassword"
          bottomMessage={
            changePassword.newPassword !== changePassword.rePassword
              ? "비밀번호가 일치하지 않습니다"
              : undefined
          }
        />
        <Button size="XL" colorType="Point" onClick={putData}>
          완료
        </Button>
      </S.PassWordWarp>
    </S.Background>
  );
};
