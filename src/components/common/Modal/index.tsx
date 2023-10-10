import React, { ReactNode, useEffect } from "react";
import * as S from "./style";

interface ModalProps {
  isOpen: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
  title?: string;
  nonAcquireResponse?: boolean;
}

/** 사용법 : < Modal isOpen={boolean} title?="title"> {children} </ Modal > */
export const Modal = ({ isOpen, setOpen, children, title, nonAcquireResponse }: ModalProps) => {
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
          <S.Container>
            {title && <S.Title>{title}</S.Title>}
            {children}
            </S.Container>
        </S.BackDrop>
      )}
    </>
  );
};
