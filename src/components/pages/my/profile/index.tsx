import { useState, useEffect } from "react";
import { Button } from "../../../../styles/common/Button";
import { Input } from "../../../common/Input";
import { Tab } from "../../../common/Tab";
import * as S from "./style";
import { InputAuto } from "../../../common/InputAuto";
import { Modal } from "../../../common/Modal";

interface changeProfileType {
  // newDepartment: string;
  UserName: string;
  UserNumber: string;
}

export const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [changeProfile, setChangeProfile] = useState<changeProfileType>({
    // newDepartment: "",
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
        <InputAuto
          value={Department}
          setValue={setDepartment}
          label="부서"
          placeholder="부서를 입력해주세요"
        />
        <Button size="XL" colorType="Point" onClick={openModal}>
          완료
        </Button>
        {open && (
          <Modal isOpen>
            <S.ModifyMoadleTitle>수정하시겠습니까?</S.ModifyMoadleTitle>
            <S.ModifyBody>이 작업은 되돌릴 수 없습니다</S.ModifyBody>
            <S.ModifyMoadlBtnFlex>
              <Button colorType="Point" size="M" onClick={() => {}}>
                수정
              </Button>
              <Button colorType="Gray" size="M" onClick={openModal}>
                취소
              </Button>
            </S.ModifyMoadlBtnFlex>
          </Modal>
        )}
      </S.profileInputWarp>
    </S.Background>
  );
};
