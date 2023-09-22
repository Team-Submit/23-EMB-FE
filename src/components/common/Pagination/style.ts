import styled from "styled-components";
import { ChevronLeft20 } from "../../../assets/icons/ChevronLeft20";
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

export const Page = styled(DefaultButton)`
  border-radius: 50%;
  &:disabled {
    pointer-events: none;
    background-color: ${color.Gray[95]};
  }
  color: ${color.Blue[0]};
  &:hover {
    color: ${color.White};
    background-color: ${color.Blue[0]};
  }
`;
