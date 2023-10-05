import { styled } from "styled-components";

export const Background = styled.div`
    width: 60%;
    height: 91vh;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const InputFlex = styled.div`
    width: 70%;
    margin-top: 3%;
`;

export const ListDataFlex = styled.div`
    height: 65%;
`;

export const TotalList = styled.div`
    font-size: 30px;
`;

export const PaginationFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ModalTitle = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

export const ModalBody = styled.div`
    font-size: 24px;
`;

export const MoadlBtnFlex = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    & > button{
        width: 50%;
    }
`;