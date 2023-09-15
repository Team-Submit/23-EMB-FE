import { styled } from "styled-components";
import { color } from "../../../styles/theme";


export const Background = styled.div`
    width: 100%;
    height: calc(100vh - 9vh);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5%;
`;

export const Logo = styled.img`
    width: 20%;
`;

export const InputFlex = styled.div`
    background-color: ${color.Gray[95]};
    display: flex;
    align-items: center;
    padding: 16px 17px;
    gap: 17px;
    border-radius: 5px;
`;