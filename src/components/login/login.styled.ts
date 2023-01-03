import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
const Forget = styled.button`
  font-family: "Poppins";
  font-size: ${pxToRem(20)};
  margin-left: ${pxToRem(194)};
  margin-top: ${pxToRem(15)};
  text-decoration-line: underline;
  border: none;
  background: none;
`;
export { Forget };
