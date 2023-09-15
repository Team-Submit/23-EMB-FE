import * as S from './style'
import { Logo } from '../../../assets';
import { Input } from '../../common/Input';
import { useState } from 'react';
import { Button } from '../../../styles/common/Button';
import { color } from '../../../styles/theme';
import { Search24 } from '../../../assets/icons/Search24';

interface Serach {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = () => {

    const [nameState, setNameState] = useState<string>("");
    const [inputError, setInputError] = useState<boolean>(false);

    return (
        <S.Background>
            <S.Logo src={Logo} />
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
        </S.Background>
    );
}