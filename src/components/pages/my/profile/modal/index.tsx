import { Button } from "../../../../../styles/common/Button";
import { Modal } from "../../../../common/Modal";
import * as S from "./style";

interface ProfileProp {
  cancelClick: () => void;
  updateClick: () => void;
  isOpen: boolean;
}

export const ProfileModal = ({
  cancelClick,
  updateClick,
  isOpen,
}: ProfileProp) => {
  return (
    <Modal isOpen={isOpen}>
      <S.ModifyMoadleTitle>수정하시겠습니까?</S.ModifyMoadleTitle>
      <S.ModifyBody>이 작업은 되돌릴 수 없습니다</S.ModifyBody>
      <S.ModifyMoadlBtnFlex>
        <Button colorType="Point" size="M" onClick={updateClick}>
          수정
        </Button>
        <Button colorType="Gray" size="M" onClick={cancelClick}>
          취소
        </Button>
      </S.ModifyMoadlBtnFlex>
    </Modal>
  );
};
