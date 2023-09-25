import { styled } from "styled-components";
import { color } from "../../../styles/theme";


export const BigFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const SmallFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${color.Black.Text};
`;

export const Label = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: ${color.Black.Text};

`;

export const Body = styled.div`
    font-size: 16px;
    font-weight: Medium;
    color: ${color.Black.Text};

`;

