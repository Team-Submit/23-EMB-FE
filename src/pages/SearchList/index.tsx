import { useState } from 'react';
import { SearchInput } from '../../components/common/SearchInput';
import { IndexData } from '../../components/common/Data';
import * as S from './style'
import { UserData } from '../../components/common/Data/UserData';

export const SearchList = () => {

    const [total, setTotal] = useState<number>(100);

    return (
        <S.Background>
            <S.InputFlex>
                <SearchInput />
            </S.InputFlex>
            <S.TotalList>총 {total}건 검색됨</S.TotalList>
            <div>
                <IndexData type='search'></IndexData>
                <UserData name="이름" department="부서명" phoneNumber="전화번호" userUpdate={() => { alert(1) }} userDelete={() => { alert(1) }} />
                <UserData name="이름" department="부서명" phoneNumber="전화번호" userUpdate={() => { alert(1) }} userDelete={() => { alert(1) }} />
            </div>
        </S.Background>
    );
}