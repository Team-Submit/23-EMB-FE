import { styled } from "styled-components";
import { color } from "../../../styles/theme";

export const DeleteMoadleTitle = styled.p`
    font-size: 32px;
    font-weight: 700;
`;

export const DeleteBody = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: ${color.Red[0]};
`;

export const DeleteMoadleBodyFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`

export const DeleteMoadlBtnFlex = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    & > button {
        width: 50%;
    }
`;


