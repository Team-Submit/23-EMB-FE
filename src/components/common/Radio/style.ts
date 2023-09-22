import { hover } from "@testing-library/user-event/dist/hover";
import { color } from "./../../../styles/theme";
import {
  styled,
  css,
} from "styled-components";

export const Container = styled.div<{
  disabled?: boolean;
}>``;

export const RadioButton = styled.div<{
  disabled?: boolean;
  selected: boolean;
}>`
  border-radius: 20px;
  padding: 12px 20px;
  background-color: ${color.Gray[95]};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            background-color: ${color
              .Gray[85]};
            color: ${color.Black.Text};
            box-shadow: 0px 2px 4px
              rgba(0, 0, 0, 0.25);
            cursor: pointer;
          }
        `
      : css`
          background-color: ${color
            .Gray[85]};
          color: ${color.Gray[75]};
        `}

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${color.Black
        .Solid};
      color: ${color.White};
      cursor: pointer;
    `}
`;
