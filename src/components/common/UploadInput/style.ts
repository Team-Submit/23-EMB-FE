import { styled } from "styled-components";
import { color } from "../../../styles/theme";

export const Warpper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: 2px solid ${color.Gray[75]};
    border-radius: 20px;
    padding: 24px;
    width: 60%;
    min-width: 800px;
`;

export const MattersFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Matters = styled.div`
    font-size: 24px;
    font-weight: 800;
    word-break: keep-all;
`;

export const Line = styled.div`
    min-width: 200px;
    height: 1px;
    background-color: ${color.Gray[75]};
    width: 100%;
`;

export const InputFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const Wave = styled.div`
    font-size: 48px;
    font-weight: 400;
    margin-top: 20px;
`;

export const BtnFlex = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ModalTitle = styled.div`
    font-size: 32px;
    font-weight: 800;
`;

export const MoadlBtnFlex = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    & > button{
        width: 50%;
    }
`;