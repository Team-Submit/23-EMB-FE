import { styled } from "styled-components";
import { color } from "../../styles/theme";

export const Welcome = styled.div`
  text-align: center;                           
  font-size: 50px;
  color: ${color.Blue[0]};
  font-weight: bolder;
`;

export const Paragraph = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

// export const LoginContainer = styled.div`
//   width: 552px;
//   height: 827px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 40px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

export const FormGroup = styled.div`
  margin: 0px;
`;