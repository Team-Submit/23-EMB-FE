import * as S from "./style";

interface RadioProps {
  disabled?: boolean;
  selected: boolean;
}

export const Radio = ({
  disabled = false,
  selected,
}: RadioProps) => {
  return (
    <S.Container>
      <S.RadioButton
        disabled={disabled}
        selected={selected}
      >
        워싱턴어쩌고저쩌고
      </S.RadioButton>
    </S.Container>
  );
};

export default Radio;
