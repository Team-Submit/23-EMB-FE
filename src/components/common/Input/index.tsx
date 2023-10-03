import { Excalmation } from "../../../assets/icons/Exclamation";
import { color } from "../../../styles/theme";
import * as S from "./style";

interface InputProps {
  error?: boolean;
  bottomMessage?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  type?: string;
  width?: string;
  name?: string;

  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

/** < Input value={값} onChange={함수} label?={label} placeholder?={placeholder} width?={string (기본 100%)} bottomMessage?={하단문구} error? disabeled? onFocus?={()=>void} type?={string}/> */
export const Input = ({
  error = false,
  bottomMessage,
  disabled = false,
  label,
  placeholder,
  onChange,
  value,
  onFocus,
  type,
  width = "100%",
  name,
}: InputProps) => {
  return (
    <S.Container width={width}>
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.Einput
        autoComplete="off"
        id={label}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        name={name}
      />
      <S.Bind>
        {error && <Excalmation fill={color.Red[0]} />}
        <S.BottomMessage error={error}>{bottomMessage}</S.BottomMessage>
      </S.Bind>
    </S.Container>
  );
};
