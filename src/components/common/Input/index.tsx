import { Excalmation } from "../../../assets/icons/Exclamation";
import { color } from "../../../styles/theme";
import * as S from "./style";

interface InputProps {
  error?: boolean;
  bottomMessage?: string;
  disabled?: boolean;
  label: string;
  placeholder: string;

  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const Input = ({
  error = false,
  bottomMessage,
  disabled = false,
  label,
  placeholder,
  onChange,
  value,
}: InputProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Einput
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      <S.Bind>
        {error && (
          <Excalmation
            fill={color.Red}
          />
        )}
        <S.BottomMessage error={error}>
          {bottomMessage}
        </S.BottomMessage>
      </S.Bind>
    </S.Container>
  );
};
