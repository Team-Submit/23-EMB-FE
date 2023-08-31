import { DepartmentBadge } from "../DepartmentBadge";
import * as S from "./style";
interface SearchDataProps {
  name: string;
  birthdate: string;
  manager: string;
  department: string;
  occupation: string;
  tenure: string;
}
interface UserDataProps {
  name: string;
  department: string;
  phoneNumber: string;
}
interface IndexDataProps {
  type: "search" | "user";
}

/** 사용법 < SearchData name="이름" department="부서명" birthdate="생년월일" manager="담당자" /> */
export const SearchData = ({
  name,
  birthdate,
  manager,
  department,
  occupation,
  tenure,
}: SearchDataProps) => {
  return (
    <S.UserSearchContainer type="search">
      <S.Name>{name}</S.Name>
      <S.BirthDay>{birthdate}</S.BirthDay>
      <S.Name>{manager}</S.Name>
      <DepartmentBadge department={department} />
      <S.OccipationTenure>{occupation}</S.OccipationTenure>
      <S.OccipationTenure>{tenure}</S.OccipationTenure>
    </S.UserSearchContainer>
  );
};

/** 사용법 < UserData name="이름" department="부서명" phoneNumber="전화번호" /> */
export const UserData = ({ name, department, phoneNumber }: UserDataProps) => {
  return (
    <S.UserSearchContainer type="user">
      <S.Icon>|||</S.Icon> {/* 아이콘 문제 해결하면 수정하기 */}
      <S.Name>{name}</S.Name>
      <DepartmentBadge department={department} />
      <S.PhoneNumber>{phoneNumber}</S.PhoneNumber>
    </S.UserSearchContainer>
  );
};

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
          <S.Icon />
          <S.Name>성명</S.Name>
          <S.Department>부서</S.Department>
          <S.PhoneNumber>전화번호</S.PhoneNumber>
        </>
      )}
    </S.IndexContainer>
  );
};
