import { styled } from "styled-components";
import { color } from "../../../styles/theme";

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

export const Container = styled.div`
  width: 640px;
  border-radius: 20px;
  background-color: ${color.White};

  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
