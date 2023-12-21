import * as S from "./style";

interface IndexDataProps {
  type: "search" | "user" | "ect";
}

/** 사용법 < IndexData type="search | user" /> */
export const IndexData = ({ type }: IndexDataProps) => {
  return (
    <S.IndexContainer type={type}>
      {type === "search" ? (
        <>
          <S.Id>순서</S.Id>
          <S.Name>성명</S.Name>
          <S.BirthDay>생년월일</S.BirthDay>
          <S.Name>담당자</S.Name>
          <S.Department>담당 부서</S.Department>
          <S.OccipationTenure>근무기간</S.OccipationTenure>
          <S.OccipationTenure>직종</S.OccipationTenure>
        </>
      ) : type === "user" ? (
        <>
          <S.TransparentDiv />
          <S.Name>유저 아이디</S.Name>
          <S.Name>성명</S.Name>
          <S.Department>부서</S.Department>
          <S.PhoneNumber>전화번호</S.PhoneNumber>
        </>
      ) : (
        <>
          <S.TransparentDiv />
          <S.PhoneNumber>고유 사용자 번호</S.PhoneNumber>
        </>
      )}
    </S.IndexContainer>
  );
};
