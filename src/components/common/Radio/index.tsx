import * as S from "./style";
import { Check } from "../../../assets/icons/Check";

interface RadioProps {
  disabled?: boolean;
  selected?: boolean;
  text: string;
  onClick?: () => void;
}

export const Radio = ({
  disabled = false,
  selected = false,
  text,
  onClick,
}: RadioProps) => {
  return (
    <S.RadioButton disabled={disabled} selected={selected} onClick={onClick}>
      {selected && <Check fill="white" />}
      {text}
    </S.RadioButton>
  );
};

export default Radio;
