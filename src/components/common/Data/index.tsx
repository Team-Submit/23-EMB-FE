import * as S from "./style";

interface IndexDataProps {
  type: "search" | "user";
}

/** 사용법 < IndexData type="search | user" /> */
export const IndexData = ({ type }: IndexDataProps) => {
  return (
    <S.IndexContainer type={type}>
      {type === "search" ? (
        <>
          <S.Name>성명</S.Name>
          <S.BirthDay>생년월일</S.BirthDay>
          <S.Name>담당자</S.Name>
          <S.Department>담당 부서</S.Department>
          <S.OccipationTenure>근무기간</S.OccipationTenure>
          <S.OccipationTenure>직종</S.OccipationTenure>
        </>
      ) : (
        <>
          <S.TransparentDiv />
          <S.Name>성명</S.Name>
          <S.Department>부서</S.Department>
          <S.PhoneNumber>전화번호</S.PhoneNumber>
        </>
      )}
    </S.IndexContainer>
  );
};
