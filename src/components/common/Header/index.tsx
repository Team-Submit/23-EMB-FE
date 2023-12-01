import * as S from "./style";
import { useEffect, useRef, useState } from "react";
import { DepartmentBadge } from "../DepartmentBadge";
import { ChevronDown } from "../../../assets/icons/ChevronDown";
import { useLocation, useNavigate } from "react-router-dom";
import { Tab } from "../Tab";
import { Button } from "../../../styles/common/Button";
import { logout } from "../../../apis/common/logout";
import { Modal } from "../Modal";
import { getDepartment } from "../../../apis/common/header";

interface userInfoType {
  Department: string;
  UserName: string;
  UserNumber: string;
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
    Department: "",
    UserName: "",
    UserNumber: "",
  });
  console.log(userinfo);

  useEffect(() => {
    const getData = async () => {
      const res = await getDepartment();
      setUserinfo(res);
    };
    getData();
  }, []);

  const handleLogout = () => {
    setIsOpenModal(true);
  };

  const handleConfirmLogout = async () => {
    const res = await logout();
    // setList();
    console.log(res);
    setIsOpenModal(false);
  };

  const handleCancelLogout = () => {
    setIsOpenModal(false);
  };

  return (
    <S.Container>
      <Modal isOpen={isOpenModal} title="로그아웃 하시겠습니까?">
        <S.BottonBox>
          <Button size="M" colorType="Red" onClick={handleConfirmLogout}>
            로그아웃
          </Button>
          <Button size="M" colorType="Gray" onClick={handleCancelLogout}>
            취소
          </Button>
        </S.BottonBox>
      </Modal>
      {user === "User" ? (
        <S.MenuContainer>
          <Tab
            list={[
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
            ]}
            selected={pathname}
          />
        </S.MenuContainer>
      ) : (
        <S.MenuContainer>
          <Tab
            list={[
              {
                text: "검색",
                link: "/home",
                path: "home",
              },
              {
                text: "계정관리",
                link: "/admin",
                path: "admin",
              },
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
              <div onClick={handleLogout}>로그아웃</div>
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
