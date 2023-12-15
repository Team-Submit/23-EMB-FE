import { useEffect, useState } from "react";
import { ChevronLeft20 } from "../../../assets/icons/ChevronLeft20";
import { ChevronRight20 } from "../../../assets/icons/ChevronRight20";
import * as S from "./style";

interface PaginaionProps {
  total: number;
  nowPage: number;
  setNowPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ total, nowPage, setNowPage }: PaginaionProps) => {
  const [page, setPage] = useState<number[]>([]);
  const [selectPage, setSeletPage] = useState<number>(1);
  const end = Math.ceil(total / 10);

  const countPages = () => {
    setPage(
      Array.from(
        { length: Math.min(5, end - (selectPage - 1) * 5) },
        (_, i) => i + (selectPage - 1) * 5 + 1
      )
    );
  };

  useEffect(() => {
    countPages();
  }, [total, selectPage]);

  useEffect(() => {
    setSeletPage(Math.ceil(nowPage / 10));
  }, []);

  return (
    <S.Container>
      <S.Arrow
        disabled={selectPage === 1}
        onClick={() => setSeletPage(selectPage - 1)}
      >
        <ChevronLeft20 />
      </S.Arrow>
      <S.PagesContainer>
        {page.map((v) => (
          <S.Page selected={nowPage === v} onClick={() => setNowPage(v)} key={v}>
            {v}
          </S.Page>
        ))}
      </S.PagesContainer>
      <S.Arrow
        disabled={selectPage === Math.ceil(end / 5)}
        onClick={() => setSeletPage(selectPage + 1)}
      >
        <ChevronRight20 />
      </S.Arrow>
    </S.Container>
  );
};
