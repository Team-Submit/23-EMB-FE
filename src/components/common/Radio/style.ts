import { BoxShadow, color } from "./../../../styles/theme";
import { styled, css } from "styled-components";

export const RadioButton = styled.button<{
  disabled?: boolean;
  selected: boolean;
}>`
  border-radius: 20px;
  padding: 12px 20px;
  gap: 8px;
  background-color: ${color.Gray[95]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 24px;

  transition: 100ms all ease-in-out;

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            background-color: ${color.Gray[85]};
            color: ${color.Black.Text};
            box-shadow: ${BoxShadow};
            cursor: pointer;
          }
        `
      : css`
          background-color: ${color.Gray[85]};
          color: ${color.Gray[75]};
        `}

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${color.Black.Solid};
      color: ${color.White};
      cursor: pointer;
      &:hover {
        background-color: ${color.Black.Solid};
        color: ${color.White};
      }
    `}
`;
