import { styled } from "styled-components";
import { color } from "../../../styles/theme";

const BACKGROUND_COLOR = "#5EBF3B";

export const Container = styled.div<{ widthAuto: boolean }>`
  width: ${({ widthAuto }) => (widthAuto ? "fit-content" : "144px")};
  > p {
    background-color: ${BACKGROUND_COLOR};
    color: ${color.White};
    padding: 4px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
  }
`;
