import { IndexData } from "../../components/common/Data";
import { UserData } from "../../components/common/Data/UserData";
import * as S from "./style";
import { Tab } from "../../components/common/Tab/index";

export const AdminPage = () => {
  return (
    <S.Background>
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
              alert(1);
            }}
          />
          <UserData
            name="짜잔"
            department="이게뭐람"
            phoneNumber="010-1234-5678"
            userUpdate={() => {
              alert(1);
            }}
            userDelete={() => {
              alert(1);
            }}
          />
        </>
      </S.Content>
    </S.Background>
  );
};
