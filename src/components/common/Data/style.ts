import { styled } from "styled-components";
import { color } from "../../../styles/theme";

const DataContainer = styled.div`
  border-bottom: 1px solid ${color.Gray[75]};

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserSearchContainer = styled(DataContainer)<{
  type: "search" | "user";
}>`
  padding: 8px 20px;
  background-color: ${color.White};
  font-size: 16px;
  cursor: ${({ type }) => (type === "search" ? "pointer" : "auto")};
  &:hover {
    background-color: ${color.Blue[9]};
  }
`;

export const IndexContainer = styled(DataContainer)`
  padding: 4px 20px;
  background-color: ${color.Gray[95]};
`;

export const Name = styled.div`
  width: 80px;
`;
export const BirthDay = styled.div`
  width: 120px;
`;
export const PhoneNumber = styled.div`
  width: 140px;
`;

export const Department = styled.div`
  width: 144px;
`;
export const Icon = styled.div`
  width: 24px;
  height: 24px;
`;
