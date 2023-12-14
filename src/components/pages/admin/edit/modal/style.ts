import { styled } from "styled-components";

export const ModifyModalTitle = styled.p`
    font-size: 32px;
    font-weight: 700;
`;

export const ModifyBody = styled.p`
    font-size: 24px;
    font-weight: 400;
`;

export const ModifyModalBtnFlex = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    & > button {
        width: 50%;
    }
`;
