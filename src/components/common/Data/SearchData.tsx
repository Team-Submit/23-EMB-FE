import * as S from "./style";
import { DepartmentBadge } from "../DepartmentBadge";

interface SearchDataProps {
  name: string;
  birthdate: string;
  manager: string;
  department: string;
  occupation: string;
  tenure: string;
  onClick: () => void;
}

/** 사용법 < SearchData name="이름" department="부서명" birthdate="생년월일" manager="담당자" occupation="재직기간" tenure="직종" onClick={onClick 함수} /> */
export const SearchData = ({
  name,
  birthdate,
  manager,
  department,
  occupation,
  tenure,
  onClick,
}: SearchDataProps) => {
  return (
    <S.UserSearchContainer type="search" onClick={onClick}>
      <S.Name>{name}</S.Name>
      <S.BirthDay>{birthdate}</S.BirthDay>
      <S.Name>{manager}</S.Name>
      <DepartmentBadge department={department} />
      <S.OccipationTenure>{occupation}</S.OccipationTenure>
      <S.OccipationTenure>{tenure}</S.OccipationTenure>
    </S.UserSearchContainer>
  );
};
