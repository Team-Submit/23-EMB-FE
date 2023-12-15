import { styled } from "styled-components";
import { color } from "../../styles/theme";

export const Background = styled.div`
  width: 100vw;
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 70px;
  align-items: center;
`;

export const Content = styled.div`
  & > div {
    width: 80vw;
    min-width: 480px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const UserData = styled.div``;


export const Title =styled.p`
  font-size: 25px;
  font-weight: bold;
  width: 80vw;
  min-width: 480px;
`