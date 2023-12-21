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

  transition: 100ms all ease-in-out;

  ${({ type }) =>
    type === "search"
      ? css`
          cursor: pointer;
          min-width: 1004px;
        `
      : css`
          min-width: 488px;
          position: relative;
        `};
  &:hover {
    background-color: ${color.Blue[9]};
  }
`;

export const IndexContainer = styled(DataContainer)<{
  type: "search" | "user" | "ect";
}>`
  padding: 4px 20px;
  background-color: ${color.Gray[95]};
  min-width: ${({ type }) => (type === "search" ? "1004px" : "488px")};
`;

export const Id = styled.div`
  width: 50px;
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
  width: 250px;
`;

export const TransparentDiv = styled.div`
  width: 24px;
  height: 24px;
`;

export const Icon = styled(TransparentDiv)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingDropContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  padding: 6px 6px;
  gap: 4px;
  width: 120px;

  background-color: ${color.White};
  border: 1px solid ${color.Gray[75]};
  border-radius: 4px;

  > div {
    cursor: pointer;
    padding: 2px 6px;
    border-radius: 2px;
    &:hover{
      background-color: ${color.Gray[95]};
      transition: 100ms all ease-in-out;
    }
  }
  > hr {
    border: 1px solid ${color.Gray[85]};
  }
`;
