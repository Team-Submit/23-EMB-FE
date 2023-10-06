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

export const Text24 = styled.div`
    font-size: 24px;
`

export const RadioContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    &>button{
        width: calc(50% - 8px);
    }
`