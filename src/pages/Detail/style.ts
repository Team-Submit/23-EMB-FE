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
  gap: 8px;
`;

export const BackIcon = styled.div`
  cursor: pointer;

  height: 48px;
  width: 48px;
  padding: 12px;
  border-radius: 4px;

  transition: 100ms all ease-in-out;

  &:hover{
    background-color: ${color.Gray[95]};
  }
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