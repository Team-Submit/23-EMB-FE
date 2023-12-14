import { styled } from "styled-components";
import { color } from "../../../styles/theme";

export const Container = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ width }) => width};
`;

export const Label = styled.label`
  gap: 20px;
  font-size: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${color.Gray[85]};
  &:focus-within {
    border: 1px solid ${color.Blue[0]};
  }
`;

export const Einput = styled.input<{ $password?: string }>`
  font-size: 20px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 14px 14px 14px;
  border: ${({ $password }) =>
    $password !== "password" ? `1px solid ${color.Gray[85]}` : "none"};

  &::placeholder {
    color: ${color.Gray[75]};
  }

  &:disabled {
    border: 1px solid ${color.Gray[75]};
    &::placeholder {
      color: ${color.Gray[75]};
    }
  }
`;

export const EyeCotainer = styled.div`
  cursor: pointer;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomMessage = styled.p<{
  error: boolean;
}>`
  font-size: 20px;
  color: ${({ error }) => (error ? "red" : "black")};
`;

export const Bind = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
