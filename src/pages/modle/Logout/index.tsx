import { Modal } from "../../../components/common/Modal";
import { Button } from "../../../styles/common/Button";
import * as S from './style';

export const LogOut = () => {
  return ( 
  <Modal isOpen>
    <S.LogOutMoadleTitle>로그아웃 하시겠습니까?</S.LogOutMoadleTitle>
    <S.LogOutMoadlBtnFlex>
        <Button colorType="Red" size="M" onClick={() => {}}>로그아웃</Button>
        <Button colorType="Gray" size="M" onClick={() => {}}>취소</Button>
    </S.LogOutMoadlBtnFlex>
    
  </Modal>
  );
}
