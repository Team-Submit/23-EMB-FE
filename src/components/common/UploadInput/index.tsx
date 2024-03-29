import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostUpload, UploadDataType } from "../../../apis/common/Upload";
import { Button } from "../../../styles/common/Button";
import { Input } from "../Input";
import { UploadModal } from "../UploadModal";
import * as S from "./style"

export const UploadInput = () => {

    const [upload, setUpload] = useState<UploadDataType>({
        name: "",
        birthdate: "",
        address: "",
        firstTenure: "",
        lastTenure: "",
        occupation: "",
    });

    const [Open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const onChangeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUpload({
            ...upload,
            [name]: value,
        });
    };

    const onUploadData = async () => {
        await PostUpload(upload);
        navigate('/home');
    }

    return (
        <>

            <S.Warpper>
                <S.MattersFlex>
                    <S.Matters>인적사항</S.Matters>
                    <S.Line />
                </S.MattersFlex>
                <S.InputFlex>
                    <Input
                        value={upload.name}
                        onChange={onChangeUpload}
                        label="성명"
                        placeholder="홍길동"
                        type="string"
                        width="20%"
                        name="name"
                    />
                    <Input
                        value={upload.birthdate}
                        onChange={onChangeUpload}
                        label="생년월일"
                        placeholder="20230926"
                        type="date"
                        width="20%"
                        name="birthdate"
                    />
                    <Input
                        value={upload.address}
                        onChange={onChangeUpload}
                        label="주소"
                        placeholder="주민등록상 주소를 입력하세요."
                        type="string"
                        width="35%"
                        name="address"
                    />
                </S.InputFlex>
                <S.MattersFlex>
                    <S.Matters>경력사항</S.Matters>
                    <S.Line />
                </S.MattersFlex>
                <S.InputFlex>
                    <Input
                        value={upload.firstTenure}
                        onChange={onChangeUpload}
                        label="재직기간 시작"
                        type="date"
                        width="20%"
                        name="firstTenure"
                    />
                    <S.Wave>~</S.Wave>
                    <Input
                        value={upload.lastTenure}
                        onChange={onChangeUpload}
                        label="재직기간 종료"
                        type="date"
                        width="20%"
                        name="lastTenure"
                    />
                    <Input
                        value={upload.occupation}
                        onChange={onChangeUpload}
                        label="직종"
                        placeholder="사회복무 요원"
                        type="string"
                        width="25%"
                        name="occupation"
                    />
                </S.InputFlex>
                <S.BtnFlex>
                    <Button
                        size="M"
                        $colortype="Point"
                        onClick={() => setOpen(true)}
                    >업로드</Button>
                </S.BtnFlex>
            </S.Warpper>
            <UploadModal
                OpenProps={Open}
                SetOpenProps={setOpen}
                UploadFuntion={() => onUploadData()}
            />
        </>
    );
}