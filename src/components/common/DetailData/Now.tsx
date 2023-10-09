import * as S from "./style";
import { DepartmentBadge } from "../DepartmentBadge";

<<<<<<< Updated upstream
export const NowData = () => {
=======
interface NowType {
    department: string;
    userName: string;
    userNumber: string;
}

export const NowData = ({ department, userName, userNumber }: NowType) => {
>>>>>>> Stashed changes
    return (
        <S.BigFlex>
            <S.Title>현재</S.Title>
            <S.SmallFlex>
                <S.Label>발급 부서</S.Label>
<<<<<<< Updated upstream
                <DepartmentBadge department="재정낭비" widthAuto />
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>담당자 이름</S.Label>
                <S.Body>김밥봉</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>담당자 전화번호</S.Label>
                <S.Body>010-1997-1015</S.Body>
=======
                <DepartmentBadge department={department} widthAuto />
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>담당자 이름</S.Label>
                <S.Body>{userName}</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>담당자 전화번호</S.Label>
                <S.Body>{userNumber}</S.Body>
>>>>>>> Stashed changes
            </S.SmallFlex>
        </S.BigFlex>

    );
}