import styled, { css } from "styled-components";
import { color } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const DefaultButton = styled.button`
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  cursor: pointer;
`;
export const Arrow = styled(DefaultButton)`
  &:disabled {
    pointer-events: none;
    > svg {
      fill: ${color.Gray[85]};
    }
  }
  > svg {
    fill: ${color.Blue[0]};
    &:hover {
      fill: ${color.Blue[2]};
    }
  }
`;

export const PagesContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const Page = styled(DefaultButton)<{ selected: boolean }>`
  border-radius: 50%;

  &:hover {
    background-color: ${color.Gray[95]};
    color: ${color.Blue[0]};
  }
  ${({ selected }) =>
    selected &&
    css`
      pointer-events: none;
      color: ${color.White};
      background-color: ${color.Blue[0]};
    `}
`;
