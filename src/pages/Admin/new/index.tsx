import { useState, ChangeEvent } from "react";
import { Input } from "../../../components/common/Input";
import { Button } from "../../../styles/common/Button";
import { Tab } from "../../../components/common/Tab";
import { IssudeModal } from "../../../components/pages/admin/new";
import { issuedDate } from "../../../apis/admin/index";
import * as S from "./style";
import useTitle from "../../../hooks/useTitle";

interface changeNewType {
  newUserId: string;
  newPassword: string;
}

export const New = () => {
  const [open, setOpen] = useState<boolean>(false);

  useTitle('계정 발급')

  const [changeNew, setChangeNew] = useState<changeNewType>({
    newUserId: "",
    newPassword: "",
  });

  const onChangeNew = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setChangeNew({
      ...changeNew,
      [name]: value,
    });
  };

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const issuedUpDate = async () => {
    try{
      await issuedDate({
        id: changeNew.newUserId,
        password: changeNew.newPassword,
      });
      setOpen(false);
      setChangeNew({newUserId:"",newPassword:""})
    }catch{
      console.log("오류 발생")
    }
  };

  return (
    <S.NewBackground>
      <S.NewTabWarp>
        <Tab
          list={[
            { text: "계정 관리", link: "/admin", path: "/" },
            { text: "새 계정 발급", link: "/admin/new", path: "/admin/new" },
          ]}
          selected="/admin/new"
        />
      </S.NewTabWarp>
      <S.NewWarp>
        <S.NewText>계정 발급</S.NewText>
        <Input
          value={changeNew.newUserId}
          label="아이디"
          placeholder="아이디를 입력하세요"
          name="newUserId"
          onChange={onChangeNew}
        />
        <Input
          value={changeNew.newPassword}
          label="최초 로그인용 비밀번호"
          placeholder="비밀번호를 입력하세요"
          name="newPassword"
          onChange={onChangeNew}
          bottomMessage="최초 로그인 후 비밀번호 변경 및 정보 입력이 진행됩니다"
          error
        />

        <Button size="XL" $colortype="Point" onClick={handleModalToggle}>
          발급
        </Button>

        <IssudeModal
          updateClick={issuedUpDate}
          cancelClick={handleModalToggle}
          isOpen={open}
        />
      </S.NewWarp>
    </S.NewBackground>
  );
};
