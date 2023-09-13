import { Outlet } from "react-router-dom";
import { Header } from "../../components/common/Header";
import * as S from "./style";
export const AppLayout = () => {
  return (
    <S.Container>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Container>
  );
};
