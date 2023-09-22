import { useState } from 'react';
import { SearchInput } from '../../components/common/SearchInput';
import { IndexData } from '../../components/common/Data';
import * as S from './style'
import { SearchData } from '../../components/common/Data/SearchData';

export const SearchListPage = () => {

    const [total, setTotal] = useState<number>(100);

    return (
        <S.Background>
            <S.InputFlex>
                <SearchInput />
            </S.InputFlex>
            <S.TotalList>총 {total}건 검색됨</S.TotalList>
            <div>
                <IndexData type='search'></IndexData>
                < SearchData name="이름" department="부서명" birthdate="생년월일" manager="담당자" occupation="재직기간" tenure="직종" onClick={() => { }} />
                < SearchData name="이름" department="부서명" birthdate="생년월일" manager="담당자" occupation="재직기간" tenure="직종" onClick={() => { }} />
            </div>
        </S.Background>
    );
}