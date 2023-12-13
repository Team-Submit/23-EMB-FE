import { BoxShadow } from "./../theme";
import { css, styled } from "styled-components";
import { color } from "../theme";

type sizeEnum = "XL" | "M" | "icon";
type colorEnum = "Point" | "Gray" | "Transparent" | "Red";

interface ButtonProps {
  size: sizeEnum;
  colorType: colorEnum;
  width100?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;

  transition: 100ms all ease-in-out;

  &:hover {
    box-shadow: ${BoxShadow};
  }
  &:disabled {
    cursor: auto;
  }

  ${({ width100 }) =>
    width100 &&
    css`
      width: 100%;
    `}
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
      : colorType === "Transparent"
      ? css`
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
        `
      : css`
          background-color: ${color.Red[0]};
          color: ${color.White};
          &:hover {
            background-color: ${color.Red[1]};
          }
          &:active {
            background-color: ${color.Red[2]};
            box-shadow: none;
          }
          &:disabled {
            background-color: ${color.Red[3]};
            box-shadow: none;
          }
        `}
`;
