import * as S from './style'
import { Input } from '../../common/Input';
import { useState } from 'react';
import { Button } from '../../../styles/common/Button';
import { color } from '../../../styles/theme';
import { Search24 } from '../../../assets/icons/Search24';
import { useNavigate } from 'react-router-dom';

export const SearchInput = () => {

    const [nameState, setNameState] = useState<string>("");
    const [birthdateState, setBirthdateState] = useState<string>("");
    const [inputError, setInputError] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <S.InputFlex>
            <Input
                placeholder='성명을 입력해주세요'
                value={nameState}
                width="220px"
                type='text'
                onChange={(e) => setNameState(e.target.value)}
                disabled={false}
                {...(inputError && { error: true, bottomMessage: "검색하기 전 정보가 정확한지 확인하세요" })}
            />
            <Input
                placeholder='생년월일 0000 / 00 / 00'
                value={birthdateState}
                width="380px"
                type='date'
                onChange={(e) => setBirthdateState(e.target.value)}
                disabled={false}
                {...(inputError && { error: true, bottomMessage: "검색하기 전 정보가 정확한지 확인하세요" })}
            />
            <Button size='icon' colorType="Point" onClick={() => { navigate(`/search?name=${nameState}&birthdate=${birthdateState}`) }}>
                <Search24 fill={color.White} />
            </Button>
        </S.InputFlex>
    );
}