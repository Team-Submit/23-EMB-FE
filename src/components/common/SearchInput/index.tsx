import * as S from './style'
import { Input } from '../../common/Input';
import { useState } from 'react';
import { Button } from '../../../styles/common/Button';
import { color } from '../../../styles/theme';
import { Search24 } from '../../../assets/icons/Search24';

export const SearchInput = () => {

    const [nameState, setNameState] = useState<string>("");
    const [inputError, setInputError] = useState<boolean>(false);

    return (
        <S.InputFlex>
            <Input
                placeholder='성명을 입력해주세요'
                value={nameState}
                onChange={(e) => setNameState(e.target.value)}
                label=''
                disabled={false}
                {...(inputError && { error: true, bottomMessage: "검색하기 전 정보가 정확한지 확인하세요" })}
            />
            <Input
                placeholder='생년월일 0000 / 00 / 00'
                value={nameState}
                onChange={(e) => setNameState(e.target.value)}
                label=''
                disabled={false}
                {...(inputError && { error: true, bottomMessage: "검색하기 전 정보가 정확한지 확인하세요" })}
            />
            <Button size='icon' colorType="Point">
                <Search24 fill={color.White} />
            </Button>
        </S.InputFlex>
    );
}