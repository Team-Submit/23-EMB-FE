import { useState } from "react";
import { Button } from "../../../../styles/common/Button";
import { Input } from "../../../common/Input";
import { Tab } from "../../../common/Tab";
import * as S from "./style";
import { DepartmentInput } from "../../../common/DepartmentInput";
import { ProfileModal } from "./modal";

interface changeProfileType {
  UserName: string;
  UserNumber: string;
}

export const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [changeProfile, setChangeProfile] = useState<changeProfileType>({
    UserName: "",
    UserNumber: "",
  });
  const [Department, setDepartment] = useState("");

  const onChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setChangeProfile({
      ...changeProfile,
      [name]: value,
    });
  };
  const openModal = () => {
    setOpen(!open);
  };

  return (
    <S.Background>
      <ProfileModal
        cancelClick={openModal}
        updateClick={() => {}}
        isOpen={open}
      />
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
          value={changeProfile.UserName}
          label="이름"
          name="newUserName"
          placeholder="이름을 입력해주세요"
        />
        <Input
          onChange={onChangeProfile}
          value={changeProfile.UserNumber}
          label="연락처"
          name="newUserNumber"
          placeholder="연락처를 입력해주세요"
        />
        <DepartmentInput
          value={Department}
          setValue={setDepartment}
        />
        <Button size="XL" colorType="Point" onClick={openModal}>
          완료
        </Button>
      </S.profileInputWarp>
    </S.Background>
  );
};
