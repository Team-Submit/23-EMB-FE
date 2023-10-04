import { Modal } from "../../../components/common/Modal";
import { Button } from "../../../styles/common/Button";
import { Excalmation } from "../../../assets/icons/Exclamation";
import { color } from "../../../styles/theme";
import * as S from "./style";

export const Delete = () => {
  return (
    <Modal isOpen>
      <S.DeleteMoadleTitle>정말 삭제하시겠습니까?</S.DeleteMoadleTitle>
      <S.DeleteMoadleBodyFlex>
        <Excalmation fill={color.Red[0]} />
        <S.DeleteBody>삭제한 계정은 복구할 수 없습니다</S.DeleteBody>
      </S.DeleteMoadleBodyFlex>
      <S.DeleteMoadlBtnFlex>
        <Button colorType="Red" size="M" onClick={() => {}}>
          삭제
        </Button>
        <Button colorType="Gray" size="M" onClick={() => {}}>
          취소
        </Button>
      </S.DeleteMoadlBtnFlex>
    </Modal>
  );
};
