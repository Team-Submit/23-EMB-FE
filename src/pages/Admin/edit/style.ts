import styled from "styled-components";
import { BoxShadow, color } from "../../../styles/theme";

export const EditWrap = styled.div`
  margin-top: 120px;
`;

export const EditWrapContainer = styled.div`
  width: 500px;
  padding: 48px;
  gap: 32px;
  display: flex;
  flex-direction: column;

  border: 1px solid ${color.Gray[85]};
  border-radius: 16px;
  box-shadow: ${BoxShadow};
`;

export const EditText = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: ${color.Blue[0]};
  text-align: center;
`;

export const EditBtnBodyFlex = styled.div`
    display: flex;
    align-items: center;
`
