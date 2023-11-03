import { styled } from "styled-components";
import { color } from "../../styles/theme";

export const Background = styled.div`
  width: 100%;
  height: calc(100vh - 9vh);
`;

export const DangerBox = styled.p`
  display: flex;
  align-items: center;
`;

export const Danger = styled.p`
  color: ${color.Red[0]};
  font-size: 24px;
  margin-left: 7px;
`;

export const BottonBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const TabBox = styled.div`
  margin: 40px;
`;

export const Content = styled.div`
  & > div {
    width: 1200px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UserData = styled.div``;
