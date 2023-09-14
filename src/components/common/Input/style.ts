import { styled } from "styled-components";
import { color } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  gap: 20px;
  font-size: 20px;
`;

export const Einput = styled.input`
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 14px 14px 14px;
  border-radius: 4px;
  border: 1px solid ${color.Gray[85]};
  &::placeholder {
    color: ${color.Gray[75]};
  }
  &:focus {
    border: 1px solid ${color.Blue[0]};
  }
  &:disabled {
    border: 1px solid ${color.Gray[75]};
    &::placeholder {
      color: ${color.Gray[75]};
    }
  }
`;

export const BottomMessage = styled.p<{
  error: boolean;
}>`
  color: ${({ error }) =>
    error ? "red" : "black"};
`;

export const Bind = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
