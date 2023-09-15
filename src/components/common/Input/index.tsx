import { Excalmation } from "../../../assets/icons/Exclamation";
import { color } from "../../../styles/theme";
import * as S from "./style";

interface InputProps {
  error?: boolean;
  bottomMessage?: string;
  disabled?: boolean;
  label: string;
  placeholder?: string;

  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?:()=>void;
}

/** < Input value={값} onChange={함수} label={label} placeholder?={placeholder} bottomMessage?={하단문구} error? disabeled? onFocus?={()=>void}/> */
export const Input = ({
  error = false,
  bottomMessage,
  disabled = false,
  label,
  placeholder,
  onChange,
  value,
  onFocus
}: InputProps) => {
  return (
    <S.Container>
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.Einput
        autoComplete="off"
        id={label}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      <S.Bind>
        {error && <Excalmation fill={color.Red} />}
        <S.BottomMessage error={error}>{bottomMessage}</S.BottomMessage>
      </S.Bind>
    </S.Container>
  );
};