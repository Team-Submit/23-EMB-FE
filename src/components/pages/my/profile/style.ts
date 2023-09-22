import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const profileInputWarp = styled.div`
  padding: 48px;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0px 2px 4px 0px color(display-p3 0 0 0 / 0.25);
  width: 500px;
`;

export const personalText = styled.p`
  font-size: 40px;
  color: #4f76d6;
  font-weight: bold;
  text-align: center;
`;

export const profileTabWarp = styled.div`
  display: flex;
  width: 95%;
  margin-top: 20px;
  margin-bottom: 50px;
  gap: 6px;
`;
