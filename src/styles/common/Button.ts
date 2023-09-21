import { css, styled } from "styled-components";
import { color } from "../theme";

type sizeEnum = "XL" | "M" | "icon";
type colorEnum = "Point" | "Gray" | "Transparent";

interface ButtonProps {
  size: sizeEnum;
  colorType: colorEnum;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
  &:disabled{
    cursor: auto;
  }

  ${({ size }) =>
    size === "XL"
      ? css`
          padding: 16px 32px;
          font-size: 24px;
        `
      : size === "M"
      ? css`
          padding: 12.5px 24px;
          font-size: 16px;
        `
      : css`
          padding: 12px;
        `}

  ${({ colorType }) =>
    colorType === "Point"
      ? css`
          background-color: ${color.Blue[0]};
          color: ${color.White};
          &:hover {
            background-color: ${color.Blue[1]};
          }
          &:active {
            background-color: ${color.Blue[2]};
            box-shadow: none;
          }
          &:disabled {
            background-color: ${color.Blue[8]};
            box-shadow: none;
          }
        `
      : colorType === "Gray"
      ? css`
          background-color: ${color.Gray[95]};
          color: ${color.Black.Text};
          &:active {
            box-shadow: none;
          }
          &:disabled {
            color: ${color.Gray[75]};
            box-shadow: none;
          }
        `
      : css`
          background-color: ${color.White};
          color: ${color.Black.Text};
          &:hover {
            background-color: ${color.Gray[95]};
          }
          &:active {
            box-shadow: none;
          }
          &:disabled {
            color: ${color.Gray[75]};
            box-shadow: none;
          }
        `}
`;
