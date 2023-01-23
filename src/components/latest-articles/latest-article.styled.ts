import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
const TextWrap02 = styled.text`
  font-weight: 700;
  padding-top: ${pxToRem(24)};
  font-size: ${pxToRem(27.61)};
  color: #2f2e41;
`;

const TextWrap03 = styled.div`
  font-weight: 300;
  color: #000000;
  padding-top: ${pxToRem(24)};
  font-size: ${pxToRem(20)};
`;
export { TextWrap02, TextWrap03 };
