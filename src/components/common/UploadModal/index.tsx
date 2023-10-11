import { Dispatch } from "react";
import { Button } from "../../../styles/common/Button";
import { Modal } from "../Modal";
import * as S from './style';

interface OpenPropsType {
    OpenProps: boolean;
    SetOpenProps: Dispatch<React.SetStateAction<boolean>>;
    UploadFuntion: () => void;
}

export const UploadModal = ({ OpenProps, SetOpenProps, UploadFuntion }: OpenPropsType) => {
    return (
        <Modal isOpen={OpenProps} title="인적사항을 업로드할까요?">
            <S.MoadlBtnFlex>
                <Button colorType="Point" size="XL" onClick={() => { UploadFuntion() }}>업로드</Button>
                <Button colorType="Gray" size="XL" onClick={() => { SetOpenProps(false) }}>취소</Button>
            </S.MoadlBtnFlex>
        </Modal>
    );
}