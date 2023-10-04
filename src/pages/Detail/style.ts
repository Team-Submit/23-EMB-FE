import { styled } from "styled-components";
import { color } from "../../styles/theme";


export const Backgound = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const BackPage = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
`;

export const BackName = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: ${color.Black.Text};
`;

export const Line = styled.div`
    height: 1px;
    background-color: ${color.Gray[75]};
    margin: 10px 0;
`;