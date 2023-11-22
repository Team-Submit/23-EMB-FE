import { UploadInput } from "../../components/common/UploadInput";
import useTitle from "../../hooks/useTitle";
import * as S from "./style"



export const UploadPage = () => {
    useTitle('인적사항 업로드')
    return (
        <S.Background>
            <UploadInput />
        </S.Background>
    );
}