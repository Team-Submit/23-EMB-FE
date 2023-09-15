import * as S from './style'
import { Logo } from '../../../assets';
import { SearchInput } from '../../common/SearchInput';

export const Search = () => {

    return (
        <S.Background>
            <S.Logo src={Logo} />
            <SearchInput />
            <S.ErrorMessage>검색하기 전 정보가 정확한지 확인하세요</S.ErrorMessage>
        </S.Background>
    );
}