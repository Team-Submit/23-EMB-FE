import * as S from "./style";
import { DepartmentBadge } from "../DepartmentBadge";

interface NowType {
    department: string;
    userName: string;
    userNumber: string;
}

export const NowData = ({ department, userName, userNumber }: NowType) => {
    return (
        <S.BigFlex>
            <S.Title>현재</S.Title>
            <S.SmallFlex>
                <S.Label>발급 부서</S.Label>
                <DepartmentBadge department={department} $widthAuto />
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>담당자 이름</S.Label>
                <S.Body>{userName}</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>담당자 전화번호</S.Label>
                <S.Body>{userNumber}</S.Body>
            </S.SmallFlex>
        </S.BigFlex>

    );
}