import { IndexData } from "../../components/common/Data";
import { UserData } from "../../components/common/Data/UserData";
import * as S from "./style";
import { Tab } from "../../components/common/Tab/index";
import { Modal } from "../../components/common/Modal";
import { Excalmation } from "../../assets/icons/Exclamation";
import { color } from "../../styles/theme";
import { useState, useEffect } from "react";
import { Button } from "../../styles/common/Button";
import { getUserData } from "../../apis/common/getUserData";
import { delAccounts } from "../../apis/common/delAccounts";
import useTitle from "../../hooks/useTitle";
import { useNavigate } from "react-router-dom";

interface userListType {
  userName: string;
  department: string;
  userNumber: string;
  user_id: string;
}

export const AdminPage = () => {
  const nav = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [list, setList] = useState<userListType[]>([]);

  useTitle("계정 관리");

  const fetchData = async () => {
    const res = await getUserData();
    try {
      setList(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const delAccount = async () => {
    try {
      await delAccounts(delId);
      setIsOpenModal(false);
      fetchData();
    } catch {
      alert("error");
    }
  };

  const [delId, setDelId] = useState<string>("");

  return (
    <S.Background>
      <Modal isOpen={isOpenModal} title="정말 삭제하시겠습니까?">
        <S.DangerBox>
          <Excalmation fill={color.Red[0]} />
          <S.Danger>삭제한 계정은 복구할 수 없습니다</S.Danger>
        </S.DangerBox>
        <S.BottonBox>
          <Button size="M" colorType="Red" onClick={delAccount} width100>
            삭제
          </Button>
          <Button
            size="M"
            colorType="Gray"
            onClick={() => setIsOpenModal(false)}
            width100
          >
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

        {list.map((data) => (
          <UserData
            name={data.userName}
            department={data.department}
            phoneNumber={data.userNumber}
            userUpdate={() => {
              nav(`/admin/edit/${data.user_id}`);
            }}
            userDelete={() => {
              setIsOpenModal(true);
              setDelId(data.user_id);
            }}
          />
        ))}
      </S.Content>
    </S.Background>
  );
};
