import { styled } from "styled-components";
import { BoxShadow, color } from "../../../styles/theme";

export const InputFlex = styled.div`
    background-color: ${color.Gray[95]};
    display: flex;
    align-items: center;
    padding: 16px 17px;
    gap: 17px;
    border-radius: 5px;
    min-width: 600px;
    box-shadow: ${BoxShadow};
`;