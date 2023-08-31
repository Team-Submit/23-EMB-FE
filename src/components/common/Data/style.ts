import { css, styled } from "styled-components";
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
  ${({ type }) =>
    type === "search"
      ? css`
          cursor: pointer;
          min-width: 1004px;
        `
      : css`
          min-width: 488px;
        `};
  &:hover {
    background-color: ${color.Blue[9]};
  }
`;

export const IndexContainer = styled(DataContainer)<{
  type: "search" | "user";
}>`
  padding: 4px 20px;
  background-color: ${color.Gray[95]};
  min-width: ${({ type }) => (type === "search" ? "1004px" : "488px")};
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

export const OccipationTenure = styled.div`
  width: 220px;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
`;
