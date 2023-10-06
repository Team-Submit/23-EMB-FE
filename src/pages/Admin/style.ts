import { styled } from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: calc(100vh - 9vh);
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
