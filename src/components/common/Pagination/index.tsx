import { ChevronLeft20 } from "../../../assets/icons/ChevronLeft20";
import { ChevronRight20 } from "../../../assets/icons/ChevronRight20";
import * as S from "./style";

interface PaginaionProps {
  total: number;
  nowPage: number;
  setNowPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ total, nowPage, setNowPage }: PaginaionProps) => {
  return (
    <S.Container>
      <S.Arrow>
        <ChevronLeft20 />
      </S.Arrow>
      <S.PagesContainer>
        <S.Page>1</S.Page>
        <S.Page>2</S.Page>
        <S.Page>3</S.Page>
        <S.Page>4</S.Page>
        <S.Page>5</S.Page>
      </S.PagesContainer>
      <S.Arrow>
        <ChevronRight20 />
      </S.Arrow>
    </S.Container>
  );
};
