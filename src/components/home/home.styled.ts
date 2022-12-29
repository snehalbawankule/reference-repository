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
const TextWrap04 = styled.div`
  font-weight: 700;
  width: ${pxToRem(906)};
  color: #e6e6e6;
  padding-top: ${pxToRem(174)};
  padding-left: ${pxToRem(100)};
  font-family: "Poppins";
  font-size: ${pxToRem(96)};
`;
const TextWrap05 = styled.div`
  width: ${pxToRem(710)};
  font-weight: 300;
  color: #e6e6e6;
  padding-top: ${pxToRem(46)};
  padding-left: ${pxToRem(100)};
  font-family: "Poppins";
  font-size: ${pxToRem(32)};
`;
const PostArticle = styled.button`
  font-family: "Poppins";
  font-style: italic;
  font-weight: 300;
  font-size: 14.4883px;
  margin-left: 50px;
  color: #f3f2ff;
  background: #2f2e41;
  border-radius: 7.24416px;
`;
const Image = styled.img<HomeProps>`
  border-radius: ${pxToRem(10)};
  background-image: url(${(props) => props.src});
`;
const Boxes = styled.div`
  height: ${pxToRem(560)};
`;

export {
  TextWrap,
  TextWrap01,
  TextWrap02,
  TextWrap03,
  TextWrap04,
  TextWrap05,
  PostArticle,
  Boxes,
  Image,
};
