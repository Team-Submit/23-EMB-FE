import { Button } from "../../../styles/common/Button";
import { Modal } from "../Modal";
import * as S from "./style"

interface LogoutProps{
    isOpen: boolean;
    close: ()=>void;
    logout: ()=>void;
}

export default function LogoutModal({ close, logout, isOpen }:LogoutProps){
    return(
        <Modal isOpen={isOpen} title="로그아웃 하시겠습니까?">
            <S.BottonBox>
                <Button size="M" $colortype="Red" onClick={logout}>
                    로그아웃
                </Button>
                <Button size="M" $colortype="Gray" onClick={close}>
                    취소
                </Button>
            </S.BottonBox>
        </Modal>
    )
}