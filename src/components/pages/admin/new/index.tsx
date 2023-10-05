import { Modal } from "../../../common/Modal";
import { Button } from "../../../../styles/common/Button";
import * as S from "./style";

interface LssudeModalProps {
  cancelClick: () => void;
  updateClick: () => void;
  isOpen: boolean;
}

export const LssudeModal = ({
  cancelClick,
  updateClick,
  isOpen,
}: LssudeModalProps) => {
  return (
    <Modal isOpen={isOpen}>
      <S.LssuedMoadleTitle>계정을 발급하시겠습니까?</S.LssuedMoadleTitle>
      <S.LssuedMoadlBtnFlex>
        <Button colorType="Point" size="M" onClick={updateClick}>
          발급
        </Button>
        <Button colorType="Gray" size="M" onClick={cancelClick}>
          취소
        </Button>
      </S.LssuedMoadlBtnFlex>
    </Modal>
  );
};
