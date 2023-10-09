import * as S from "./style";

<<<<<<< Updated upstream
export const WorkData = () => {
=======
interface WorkType {
    name: string,
    birthdate: string,
    address: string,
    firstTenure: string,
    lastTenure: string,
    occupation: string,
}

export const WorkData = ({ name, birthdate, address, firstTenure, lastTenure, occupation }: WorkType) => {
>>>>>>> Stashed changes
    return (
        <S.BigFlex>
            <S.Title>근무자</S.Title>
            <S.SmallFlex>
                <S.Label>성명</S.Label>
<<<<<<< Updated upstream
                <S.Body>김바보</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>생년월일</S.Label>
                <S.Body>2077월년13월 38일</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>주소</S.Label>
                <S.Body>대한민구 무슨시 그런구 이런동 어디아파트 999동 1102호</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>재직기간</S.Label>
                <S.Body>1998년 09월 17일 ~ 3001년 01월 29일</S.Body>
            </S.SmallFlex>
            <S.SmallFlex>
                <S.Label>직종</S.Label>
                <S.Body>지구 파괴</S.Body>
=======
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
>>>>>>> Stashed changes
            </S.SmallFlex>
        </S.BigFlex>

    );
}