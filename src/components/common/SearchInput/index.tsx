import * as S from './style'
import { Input } from '../../common/Input';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '../../../styles/common/Button';
import { color } from '../../../styles/theme';
import { Search24 } from '../../../assets/icons/Search24';
import { useNavigate } from 'react-router-dom';

interface SearchInputProps {
    setError?: Dispatch<SetStateAction<boolean>>;
    propsName: string;
    propsDate: string;
}

export const SearchInput = ({ setError, propsName, propsDate }: SearchInputProps) => {

    const [nameState, setNameState] = useState<string>("");
    const [birthdateState, setBirthdateState] = useState<string>("");
    const [inputError, setInputError] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (propsName) {
            setNameState(propsName);
        } else if (propsDate) {
            setBirthdateState(propsDate);
        }
    }, []);

    const HandleSearch = () => {
        if (nameState && birthdateState) {
            navigate(`/search?name=${nameState}&birthdate=${birthdateState}`);
        } else {
            setError && setError(true);
            console.log(123);
        }
    }

    return (
        <S.InputFlex>
            <Input
                placeholder='성명을 입력해주세요'
                value={nameState}
                width="220px"
                type='text'
                onChange={(e) => setNameState(e.target.value)}
                disabled={false}
            />
            <Input
                placeholder='생년월일 0000 / 00 / 00'
                value={birthdateState}
                width="380px"
                type='date'
                onChange={(e) => setBirthdateState(e.target.value)}
                disabled={false}
            />
            <Button size='icon' colorType="Point" onClick={HandleSearch}>
                <Search24 fill={color.White} />
            </Button>
        </S.InputFlex>
    );
}