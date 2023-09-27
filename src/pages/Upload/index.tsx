import { useEffect, useState } from "react";
import { Input } from "../../components/common/Input";
import { Button } from "../../styles/common/Button";
import * as S from "./style"

interface uploadData {
    uploadName: string;
    birthdate: string;
    address: string;
    firstTenure: string;
    lastTenure: string;
    occupation: string;
}

export const UploadPage = () => {

    const [upload, setUpload] = useState<uploadData>({
        uploadName: "",
        birthdate: "",
        address: "",
        firstTenure: "",
        lastTenure: "",
        occupation: "",
    });

    const onChangeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUpload({
            ...upload,
            [name]: value,
        });
    };


    return (
        <S.Background>
            <S.Warpper>
                <S.MattersFlex>
                    <S.Matters>인적사항</S.Matters>
                    <S.Line />
                </S.MattersFlex>
                <S.InputFlex>
                    <Input
                        value={upload.uploadName}
                        onChange={onChangeUpload}
                        label="성명"
                        placeholder="홍길동"
                        type="string"
                        width="20%"
                        name="uploadName"
                    />
                    <Input
                        value={upload.birthdate}
                        onChange={onChangeUpload}
                        label="생년월일"
                        placeholder="20230926"
                        type="string"
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
                    <Button size="M" colorType="Point">업로드</Button>
                </S.BtnFlex>
            </S.Warpper>
        </S.Background>
    );
}