import styled from "styled-components";
import { BoxShadow, color } from "../../../styles/theme";

export const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PassWordWarp = styled.div`
  padding: 48px;
  border: 1px solid ${color.Gray[85]};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: ${BoxShadow};
  width: 500px;
`;

export const PassWordText = styled.p`
  font-size: 40px;
  color: ${color.Blue[0]};
  font-weight: bold;
  text-align: center;
`;

export const passwordTabWarp = styled.div`
  display: flex;
  width: 95%;
  margin-top: 20px;
  margin-bottom: 50px;
  gap: 6px;
`;
