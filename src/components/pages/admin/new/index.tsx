import { Modal } from "../../../common/Modal";
import { Button } from "../../../../styles/common/Button";
import * as S from "./style";

interface IssudeModalProps {
  cancelClick: () => void;
  updateClick: () => void;
  isOpen: boolean;
}

export const IssudeModal = ({
  cancelClick,
  updateClick,
  isOpen,
}: IssudeModalProps) => {
  return (
    <Modal isOpen={isOpen}>
      <S.IssuedMoadleTitle>계정을 발급하시겠습니까?</S.IssuedMoadleTitle>
      <S.IssuedMoadlBtnFlex>
        <Button $colortype="Point" size="M" onClick={updateClick}>
          발급
        </Button>
        <Button $colortype="Gray" size="M" onClick={cancelClick}>
          취소
        </Button>
      </S.IssuedMoadlBtnFlex>
    </Modal>
  );
};
