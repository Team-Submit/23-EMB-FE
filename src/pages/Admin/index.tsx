import { IndexData } from "../../components/common/Data";
import { UserData } from "../../components/common/Data/UserData";
import * as S from "./style";
import { Tab } from "../../components/common/Tab/index";
import { Modal } from "../../components/common/Modal";
import { Excalmation } from "../../assets/icons/Exclamation";
import { color } from "../../styles/theme";
import { useState, useEffect } from "react";
import { Button } from "../../styles/common/Button";
import { getUserData } from "../../apis/admin";

export const AdminPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserData();
      setList(res);
    };
    fetchData();
  }, []);

  return (
    <S.Background>
      <Modal isOpen={isOpenModal} title="정말 삭제하시겠습니까?">
        <S.DangerBox>
          <Excalmation fill={color.Red[0]} />
          <S.Danger>삭제한 계정은 복구할 수 없습니다</S.Danger>
        </S.DangerBox>
        <S.BottonBox>
          <Button size="M" colorType="Red">
            삭제
          </Button>
          <Button size="M" colorType="Gray">
            취소
          </Button>
        </S.BottonBox>
      </Modal>
      <S.TabBox>
        <Tab
          list={[
            { text: "계정 관리", link: "/admin", path: "/" },
            { text: "새 계정 발급", link: "/admin/new", path: "/admin/new" },
          ]}
          selected="/"
        />
      </S.TabBox>
      <S.Content>
        <IndexData type={"user"} />
        <>
          <UserData
            name="김수한무 거북이와 두루미 삼천갑자 동박삭"
            department="서브밋이당께"
            phoneNumber="010-4077-2937"
            userUpdate={() => {
              alert(1);
            }}
            userDelete={() => {
              setIsOpenModal(true);
            }}
          />
        </>
      </S.Content>
    </S.Background>
  );
};
