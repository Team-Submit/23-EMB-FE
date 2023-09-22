import {
  css,
  styled,
} from "styled-components";
import { color } from "../../../../styles/theme";

export const Container = styled.div<{
  disabled: boolean;
  selected: boolean;
}>`
  padding: 8px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background-color: ${color
          .Gray[95]};
        > hr {
          opacity: 1;
        }
      }
    `}

  >hr {
    border-radius: 8px;
    width: 100%;
    border: 2px solid ${color.Gray[75]};
    opacity: 0;
    background-color: ${color.Gray[75]};
    border: 2px solid
      ${({ selected }) =>
        selected
          ? color.Blue[0]
          : color.Gray[75]};
    opacity: ${({ selected }) =>
      selected ? "1" : "0"};
    background-color: ${({
      selected,
    }) =>
      selected
        ? color.Blue[0]
        : color.Gray[75]};
  }
  > p {
    font-size: 24px;
    color: ${({ disabled, selected }) =>
      disabled
        ? color.Gray[75]
        : selected
        ? color.Blue[0]
        : color.Black.Text};
  }
`;
