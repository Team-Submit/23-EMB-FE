import { ReactNode, useEffect } from "react";
import * as S from "./style";

interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
}

/** 사용법 : < Modal isOpen={boolean} > {children} </ Modal > */
export const Modal = ({ isOpen, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <S.BackDrop>
          <S.Container>{children}</S.Container>
        </S.BackDrop>
      )}
    </>
  );
};
