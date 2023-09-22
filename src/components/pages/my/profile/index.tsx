import { useState, useEffect } from "react";
import { Button } from "../../../../styles/common/Button";
import { Input } from "../../../common/Input";
import { Tab } from "../../../common/Tab";
import * as S from "./style";

interface changeProfileType {
  newDepartment: string;
  newUserName: string;
  newUserNumber: string;
}

export const Profile = () => {
  const [changeProfile, setChangeProfile] = useState<changeProfileType>({
    newDepartment: "",
    newUserName: "",
    newUserNumber: "",
  });

  const onChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setChangeProfile({
      ...changeProfile,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(changeProfile);
  }, [changeProfile]);
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
          selected=""
        />
        <Tab
          list={[
            {
              text: "개인정보 수정",
              link: "/my/profile",
              path: "/my/profile",
            },
          ]}
          selected="/my/profile"
        />
      </S.profileTabWarp>
      <S.profileInputWarp>
        <S.personalText>개인정보 수정</S.personalText>
        <Input
          onChange={onChangeProfile}
          value={changeProfile.newUserName}
          label="이름"
          name="newUserName"
        />
        <Input
          onChange={onChangeProfile}
          value={changeProfile.newUserNumber}
          label="연락처"
          name="newUserNumber"
        />
        <Input
          onChange={onChangeProfile}
          value={changeProfile.newDepartment}
          label="부서"
          name="newDepartment"
        />
        <Button size="XL" colorType="Point">
          완료
        </Button>
      </S.profileInputWarp>
    </S.Background>
  );
};
