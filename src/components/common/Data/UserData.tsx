import { useEffect, useRef, useState } from "react";
import { DepartmentBadge } from "../DepartmentBadge";

import * as S from "./style";
import { Bar } from "../../../assets/icons/Bar";

interface UserDataProps {
  name?: string;
  department?: string;
  phoneNumber?: string;
  userUpdate: React.MouseEventHandler<HTMLDivElement>;
  userDelete: React.MouseEventHandler<HTMLDivElement>;
  ect?: string;
}
/** 사용법 < UserData name="이름" department="부서명" phoneNumber="전화번호" userUpdate={계정수정함수} userDelete={계정삭제함수}/> */
export const UserData = ({
  name="",
  department="",
  phoneNumber="",
  userUpdate,
  userDelete,
  ect,
}: UserDataProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClose = (e: { target: any }) => {
      if (
        isOpen &&
        dropMenuRef.current &&
        !dropMenuRef.current.contains(e.target)
      )
        setIsOpen(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [isOpen]);

  return (
    <S.UserSearchContainer type="user">
      {isOpen && (
        <S.SettingDropContainer>
          <div onClick={userUpdate}>계정 수정</div>
          <hr />
          <div onClick={userDelete}>계정 삭제</div>
        </S.SettingDropContainer>
      )}
      <S.Icon onClick={() => setIsOpen(!isOpen)} ref={dropMenuRef}>
        <Bar />
      </S.Icon>
      {/* 아이콘 문제 해결하면 수정하기 */}
      {ect ? (
        <S.OccipationTenure>{ect}</S.OccipationTenure>
      ) : (
        <>
          <S.Name>{name}</S.Name>
          <DepartmentBadge department={department} />
          <S.PhoneNumber>{phoneNumber}</S.PhoneNumber>
        </>
      )}
    </S.UserSearchContainer>
  );
};
