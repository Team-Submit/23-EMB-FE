import { Modal } from "../../../../common/Modal";
import { Button } from "../../../../../styles/common/Button";
import * as S from "./style";

interface ModifyModalProps {
    cancelClick: ()=> void;
    updateClick: ()=> void;
    isOpen: boolean;
}

export const ModifyModal = ({
    cancelClick,
    updateClick,
    isOpen,
}: ModifyModalProps) => {
  
  return (
    <Modal isOpen={isOpen}>
      <S.ModifyModalTitle>수정하시겠습니까?</S.ModifyModalTitle>
      <S.ModifyBody>이 작업은 되돌릴 수 없습니다</S.ModifyBody>
      <S.ModifyModalBtnFlex>
        <Button colorType="Point" size="M" onClick={updateClick}>
          수정
        </Button>
        <Button colorType="Gray" size="M" onClick={cancelClick}>
          취소
        </Button>
      </S.ModifyModalBtnFlex>
    </Modal>
  );
};
