import * as S from "./style";
import { color } from "../../../styles/theme";
import { Check } from "../../../assets/icons/Check";
import { text } from "stream/consumers";

interface RadioProps {
  disabled?: boolean;
  selected?: boolean;
  text: string;
}

export const Radio = ({
  disabled = false,
  selected = false,
  text,
}: RadioProps) => {
  return (
    <S.Container>
      <S.RadioButton
        disabled={disabled}
        selected={selected}
      >
        {selected && (
          <Check fill="white" />
        )}
        {text}
      </S.RadioButton>
    </S.Container>
  );
};

export default Radio;
