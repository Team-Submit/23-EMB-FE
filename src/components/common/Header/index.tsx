import { useEffect, useRef, useState } from "react";
import { DepartmentBadge } from "../DepartmentBadge";
import * as S from "./style";
import { ChevronDown } from "../../../assets/icons/ChevronDown";
import Tab from "../Tab/EachTab";
import { useLocation } from "react-router-dom";

/** 사용법 : < Header /> */
export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<"User"|"Manager">("User")
  const dropMenuRef = useRef<HTMLDivElement | null>(null);
  const pathname = useLocation().pathname;

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
    <S.Container>
      {user === "User" ? (
        <S.MenuContainer>
          <S.TabLink to="/">
            <Tab value="검색" selected={pathname === "/"} />
          </S.TabLink>
          <S.TabLink to="/a">
            <Tab value="계정관리" selected={pathname === "/a"} />
          </S.TabLink>
          <S.TabLink to="/b">
            <Tab value="인적사항 업로드" selected={pathname === "/b"} />
          </S.TabLink>
        </S.MenuContainer>
      ) : (
        <S.MenuContainer>
          <S.TabLink to="/">
            <Tab value="검색" selected={pathname === "/"} />
          </S.TabLink>
          <S.TabLink to="/">
            <Tab value="계정관리" selected={pathname === "/"} />
          </S.TabLink>
          <S.TabLink to="/">
            <Tab value="문서 업로드" selected={pathname === "/"} />
          </S.TabLink>
        </S.MenuContainer>
      )}
      <S.UserContainer>
        <DepartmentBadge department={"분활정복 및 재정8부"} />
        <S.Name ref={dropMenuRef} onClick={() => setIsOpen(!isOpen)}>
          {isOpen && (
            <S.SettingDropContainer>
              <div onClick={()=>alert("로그아웃")}>로그아웃</div>
            </S.SettingDropContainer>
          )}
          <p>김밥봉</p>
          <ChevronDown />
        </S.Name>
      </S.UserContainer>
    </S.Container>
  );
};
