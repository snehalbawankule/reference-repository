import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
const TextWrap02 = styled.div`
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
const TextWrap01 = styled.div`
  padding-top: ${pxToRem(24)};
  font-weight: 300;
  font-size: ${pxToRem(16)};
  color: #6d6d6d;
`;

const TextWrap05 = styled.div`
  font-weight: 700;

  font-size: ${pxToRem(27.61)};
  color: #2f2e41;
`;

const TextWrap06 = styled.div`
  font-weight: 300;
  color: #000000;

  font-size: ${pxToRem(20)};
`;
const TextWrap04 = styled.div`
  font-weight: 300;

  font-size: ${pxToRem(16)};
  color: #6d6d6d;
`;

export {
  TextWrap02,
  TextWrap03,
  TextWrap01,
  TextWrap04,
  TextWrap05,
  TextWrap06,
};
