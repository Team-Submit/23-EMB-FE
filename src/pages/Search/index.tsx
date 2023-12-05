import * as S from './style'
import { Logo } from '../../assets';
import { SearchInput } from '../../components/common/SearchInput';
import useTitle from '../../hooks/useTitle';
import { useState } from 'react';

export const SearchPage = () => {
    const [inputError, setInputError] = useState<boolean>(false);

    useTitle('검색')
    return (
        <S.Background>
            <S.Logo src={Logo} />
            <SearchInput setError={setInputError} />
            {
                inputError && (
                    <S.ErrorMessage>검색하기 전 정보가 정확한지 확인하세요</S.ErrorMessage>
                )
            }
        </S.Background >
    );
}