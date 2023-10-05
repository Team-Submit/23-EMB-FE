import styled from "styled-components";
import { BoxShadow, color } from "../../../styles/theme";

export const NewBackground = styled.div`
  width: 100%;
`;

export const NewWarp = styled.div`
  width: 552px;
  padding: 48px;
  margin: 0 auto;
  gap: 36px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid ${color.Gray[85]};
  box-shadow: ${BoxShadow};
  `;

export const NewText = styled.p`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;

export const NewTabWarp = styled.div`
  margin: 40px;
`;

export const LssuedMoadleTitle = styled.p`
    font-size: 32px;
    font-weight: 700;
`;

export const LssuedMoadlBtnFlex = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    
    & > button{
        width: 50%;
    }
;`