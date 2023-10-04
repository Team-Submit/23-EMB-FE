import { styled } from "styled-components";
import { BoxShadow, color } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const ListContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: ${color.White};
  border: 1px solid ${color.Gray[75]};
  box-shadow: ${BoxShadow};
  border-radius: 4px;

  display: flex;
  z-index: 1;
  flex-direction: column;
  gap: 4px;
  padding: 4px;

  max-height: 180px;
  overflow: auto;

  > hr {
    border: 1px solid ${color.Gray[75]};
    &:last-child {
      display: none;
    }
  }
`;
export const ListValue = styled.div`
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover{
    background-color: ${color.Gray[95]};
  }
  &:active{
    background-color: ${color.Gray[85]};
  }
`;


export const ListNewValue = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px;
  align-items: center;
  cursor: pointer;
  >p{
    font-size: 24px;
    color: ${color.Gray[75]}
  }
  
`