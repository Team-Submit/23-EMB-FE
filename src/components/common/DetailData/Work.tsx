import * as S from "./style";

interface WorkType {
    name: string,
    birthdate: string,
    address: string,
    firstTenure: string,
    lastTenure: string,
    occupation: string,
}

export const WorkData = ({ name, birthdate, address, firstTenure, lastTenure, occupation }: WorkType) => {
    return (
        <S.BigFlex>
            <S.Title>근무자</S.Title>
            <S.SmallFlex>
                <S.Label>성명</S.Label>
                <S.Body>{name}</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>생년월일</S.Label>
                <S.Body>{birthdate}</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>주소</S.Label>
                <S.Body>{address}</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>재직기간</S.Label>
                <S.Body>{firstTenure} ~ {lastTenure}</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>직종</S.Label>
                <S.Body>{occupation}</S.Body>
            </S.SmallFlex>
        </S.BigFlex >

    );
}