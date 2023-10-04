//admin/style.ts
import styled from "styled-components";
import { color } from "../../../styles/theme";

export const editWrap = styled.div`
  margin-top: 120px;
`

export const editWrapContainer = styled.div`
  width: 500px;
  padding: 48px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  

  border: 1px solid ${color.Gray[85]};
  border-radius: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 4px 0px color(display-p3 0 0 0 / 0.25);
`;

export const editText = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #4f76d6;
  text-align: center;
`;

export const EditBtnBodyFlex = styled.div`
    display: flex;
    align-items: center;
`

export const ModifyMoadleTitle = styled.p`
    font-size: 32px;
    font-weight: 700;
`;

export const ModifyBody = styled.p`
    font-size: 24px;
    font-weight: 400;
`;

export const ModifyMoadlBtnFlex = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    & > button {
        width: 50%;
    }
`;