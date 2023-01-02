import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
type HomeProps = {
  src?: string;
};
const TextWrap = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  padding-left: ${pxToRem(60)};
  font-size: ${pxToRem(24)};
  color: #2f2e41;
`;
const TextWrap01 = styled.div`
  font-family: "Poppins";
  padding-top: ${pxToRem(24)};
  font-weight: 300;
  font-size: ${pxToRem(16)};
  color: #6d6d6d;
`;

const TextWrap02 = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  padding-top: ${pxToRem(24)};
  font-size: ${pxToRem(27.61)};
  color: #2f2e41;
`;

const TextWrap03 = styled.div`
  font-weight: 300;
  color: #000000;
  padding-top: ${pxToRem(24)};
  font-family: "Poppins";
  font-size: ${pxToRem(20)};
`;
const TextWrap04 = styled.text`
  color: #e6e6e6;
  font-family: "Poppins";
  font-size: ${pxToRem(96)};
  @media (max-width: 767px) {
    font-size: ${pxToRem(40)};
  }
`;
const TextWrap05 = styled.text`
  color: #e6e6e6;
  font-family: "Poppins";
  font-size: ${pxToRem(32)};
  @media (max-width: 767px) {
    font-size: ${pxToRem(16)};
  }
`;
const Button = styled.button`
  font-family: "Poppins";
  font-weight: 300;
  font-size: ${pxToRem(24)};
  color: #f3f2ff;
  background: #2f2e41;
  border-radius: 7.24416px;
  @media (max-width: 767px) {
    font-size: ${pxToRem(16)};
  }
`;

const Image = styled.img<HomeProps>`
  border-radius: ${pxToRem(10)};
  background-image: url(${(props) => props.src});
`;

export {
  TextWrap,
  TextWrap01,
  TextWrap02,
  TextWrap03,
  TextWrap04,
  TextWrap05,
  Button,
  Image,
};
