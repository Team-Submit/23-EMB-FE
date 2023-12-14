import { Outlet } from "react-router-dom";
import { Header } from "../../components/common/Header";
import * as S from "./style";
export const AppLayout = () => {
  return (
    <S.Container>
      <Header />
      <S.ContentContainer>
        <Outlet />
      </S.ContentContainer>
    </S.Container>
  );
};
