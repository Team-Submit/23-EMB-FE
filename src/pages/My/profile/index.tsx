import { useEffect, useState } from "react";
import { Button } from "../../../styles/common/Button";
import { Input } from "../../../components/common/Input";
import { Tab } from "../../../components/common/Tab";
import * as S from "./style";
import { ProfileModal } from "./Modal";
import { UserInfoGet } from "../../../apis/my/index";
import { UserInfoPut } from "../../../apis/my/index";
import { DepartmentInput } from "../../../components/common/DepartmentInput";
import useTitle from "../../../hooks/useTitle";

interface changeProfileType {
  newUserName: string;
  newUserNumber: string;
}

export const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [changeProfile, setChangeProfile] = useState<changeProfileType>({
    newUserName: "",
    newUserNumber: "",
  });
  const [NewDepartment, setNewDepartment] = useState("");

  useTitle('개인정보 수정')

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
  async function GetInfoData() {
    const res = await UserInfoGet();
    setNewDepartment(res.department);
    setChangeProfile({
      newUserName: res.userName,
      newUserNumber: res.userNumber
    });
  }
  useEffect(() => {
    GetInfoData();
  }, []);

  const putData = () => {
    try {
      UserInfoPut({
        newDepartment: NewDepartment,
        newUserName: changeProfile.newUserName,
        newUserNumber: changeProfile.newUserNumber,
      });
    } catch (err) {
      console.log("정보수정 중 오류가 발생했습니다");
    }
  };

  return (
    <S.Background>
      <ProfileModal
        cancelClick={openModal}
        updateClick={putData}
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
          value={changeProfile.newUserName}
          label="이름"
          name="newUserName"
          placeholder="이름을 입력해주세요"
        />
        <Input
          onChange={onChangeProfile}
          value={changeProfile.newUserNumber}
          label="연락처"
          name="newUserNumber"
          placeholder="연락처를 입력해주세요"
        />
        <DepartmentInput value={NewDepartment} setValue={setNewDepartment} />
        <Button size="XL" colorType="Point" onClick={openModal}>
          완료
        </Button>
      </S.profileInputWarp>
    </S.Background>
  );
};
