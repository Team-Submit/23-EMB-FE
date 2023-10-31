import * as S from "./style";
import { useEffect, useRef, useState } from "react";
import { DepartmentBadge } from "../DepartmentBadge";
import { ChevronDown } from "../../../assets/icons/ChevronDown";
import { useLocation, useNavigate } from "react-router-dom";
import { Tab } from "../Tab";

/** 사용법 : < Header /> */
export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<"User" | "Manager">("Manager");
  const dropMenuRef = useRef<HTMLDivElement | null>(null);
  const pathname = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();

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
          <Tab
            list={[
              { text: "검색", link: "/home", path: "home" },
              { text: "인적사항 업로드", link: "/upload", path: "upload" },
            ]}
            selected={pathname}
          />
        </S.MenuContainer>
      ) : (
        <S.MenuContainer>
          <Tab
            list={[
              { text: "검색", link: "/home", path: "home" },
              { text: "계정관리", link: "/admin", path: "admin" },
            ]}
            selected={pathname}
          />
        </S.MenuContainer>
      )}
      <S.UserContainer>
        <DepartmentBadge department={"분활정복 및 재정8부"} />
        <S.Name ref={dropMenuRef} onClick={() => setIsOpen(!isOpen)}>
          {isOpen && (
            <S.SettingDropContainer>
              <div onClick={() => alert("로그아웃")}>로그아웃</div>
              {user === "User" && (
                <>
                  <hr />
                  <div onClick={() => navigate("/my/profile")}>마이페이지</div>
                </>
              )}
            </S.SettingDropContainer>
          )}
          <p>김밥봉</p>
          <ChevronDown />
        </S.Name>
      </S.UserContainer>
    </S.Container>
  );
};
