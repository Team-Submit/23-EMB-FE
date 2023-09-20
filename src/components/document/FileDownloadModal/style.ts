import styled from "styled-components";

export const ButtonHorizonal = styled.div`
    display: flex;
    flex-direction: row;
    align-self: stretch;
    gap: 20px;
    & > button{
        flex: 1 1 0;
    }
`