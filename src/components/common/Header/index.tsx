import * as S from "./style";
import { useEffect, useRef, useState } from "react";
import { DepartmentBadge } from "../DepartmentBadge";
import { ChevronDown } from "../../../assets/icons/ChevronDown";
import { useLocation, useNavigate } from "react-router-dom";
import { Tab } from "../Tab";
import { Button } from "../../../styles/common/Button";
import { logout } from "../../../apis/common/logout";
import { Modal } from "../Modal";
import { getHeader } from "../../../apis/common/header";
import LogoutModal from "./LogoutModal";
import { isModuleNamespaceObject } from "util/types";

interface userInfoType {
  department: string;
  userName: string;
  userNumber: string;
}

/** 사용법 : < Header /> */
export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<"User" | "Manager">("User");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dropMenuRef = useRef<HTMLDivElement | null>(null);
  const pathname = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState<userInfoType>({
    department: "",
    userName: "",
    userNumber: "",
  });

  useEffect(() => {
    const getData = async () => {
      const res = await getHeader();
      if (res) {
        setUserinfo(res);
        setUser("User");
      } else {
        setUser("Manager");
      }
    };
    getData();
  }, []);

  const handleLogout = () => {
    setIsOpenModal(true);
  };

  const handleConfirmLogout = async () => {
    const res = await logout();
    localStorage.clear();
    navigate('/');
  };

  const handleCancelLogout = () => {
    setIsOpenModal(false);
  };

  return (
    <S.Container>
      <LogoutModal close={handleCancelLogout} logout={handleConfirmLogout} isOpen={isOpenModal}/>
      {user === "User" ? (
        <S.MenuContainer>
          <Tab
            list={TabData.user}
            selected={pathname}
          />
        </S.MenuContainer>
      ) : (
        <S.MenuContainer>
          <Tab
            list={TabData.admin}
            selected={pathname}
          />
        </S.MenuContainer>
      )}
      {user === "User" ? (
        <S.UserContainer>
          <DepartmentBadge department={userinfo.department} />
          <S.Name ref={dropMenuRef} onClick={() => setIsOpen(!isOpen)}>
            {isOpen && (
              <S.SettingDropContainer>
                <div onClick={handleLogout}>로그아웃</div>
                {user === "User" && (
                  <>
                    <hr />
                    <div onClick={() => navigate("/my/profile")}>마이페이지</div>
                  </>
                )}
              </S.SettingDropContainer>
            )}
            <p>{userinfo.userName}</p>
            <ChevronDown />
          </S.Name>
        </S.UserContainer>
      ) : (<S.UserContainer>
        <S.Name ref={dropMenuRef} onClick={() => setIsOpen(!isOpen)}>
          {isOpen && (
            <S.SettingDropContainer>
              <div onClick={handleLogout}>로그아웃</div>
            </S.SettingDropContainer>
          )}
          <p>관리자</p>
          <ChevronDown />
        </S.Name>
      </S.UserContainer>)
      }
    </S.Container>
  );
};

const TabData = {
  user: [
    {
      text: "검색",
      link: "/home",
      path: "home",
    },
    {
      text: "인적사항 업로드",
      link: "/upload",
      path: "upload",
    },
  ],
  admin: [
    {
      text: "계정관리",
      link: "/admin",
      path: "admin",
    },
  ]
}