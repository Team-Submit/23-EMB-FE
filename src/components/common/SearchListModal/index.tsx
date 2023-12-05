import { Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../styles/common/Button";
import { Modal } from "../Modal";
import * as S from './style';

interface OpenPropsType {
    OpenProps: boolean;
    SetOpenProps: Dispatch<React.SetStateAction<boolean>>;
    ModalName: string;
    ModalId?: number;
}

export const SearchModal = ({ OpenProps, SetOpenProps, ModalName, ModalId }: OpenPropsType) => {

    const navigate = useNavigate()

    return (
        <Modal isOpen={OpenProps} title='정말 열람하시겠습니까?'>
            <S.ModalBody>{ModalName}</S.ModalBody>
            <S.ModalBody>개인 정보 보호를 위해 열람 전 정보가 정확한지 확인하세요</S.ModalBody>
            <S.MoadlBtnFlex>
                <Button colorType="Point" size="M" onClick={() => { navigate(`/search/detail/${ModalId}`) }}>열람</Button>
                <Button colorType="Gray" size="M" onClick={() => SetOpenProps(false)}>취소</Button>
            </S.MoadlBtnFlex>
        </Modal>
    );
}