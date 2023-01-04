import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
type HomeProps = {
  src?: string;
};
const TextWrap = styled.div`
  font-weight: 700;
  font-size: ${pxToRem(24)};
  color: #2f2e41;
  display: contents;
  @media (max-width: 767px) {
    font-size: ${pxToRem(12)};
  }
`;
const TextWrap01 = styled.div`
  padding-top: ${pxToRem(24)};
  font-weight: 300;
  font-size: ${pxToRem(16)};
  color: #6d6d6d;
`;

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
const TextWrap04 = styled.text`
  color: #e6e6e6;

  font-size: ${pxToRem(96)};
  @media (max-width: 767px) {
    font-size: ${pxToRem(40)};
  }
`;
const TextWrap05 = styled.text`
  color: #e6e6e6;

  font-size: ${pxToRem(32)};
  @media (max-width: 767px) {
    font-size: ${pxToRem(16)};
  }
`;
const Button = styled.button`
  height: 50px;
  font-weight: 300;
  font-size: ${pxToRem(24)};
  padding-left: ${pxToRem(40)};
  padding-right: ${pxToRem(40)};
  color: #f3f2ff;
  background: #2f2e41;
  border: 2px solid #2f2e41;
  border-radius: ${pxToRem(15)};
  @media (max-width: 767px) {
    font-size: ${pxToRem(16)};
    height: ${pxToRem(30)};
    padding-left: ${pxToRem(16)};
    padding-right: ${pxToRem(16)};
  }
`;

const Image = styled.img<HomeProps>`
  border-radius: ${pxToRem(10)};
  background-image: url(${(props) => props.src});
  backgroundPosition: "center",
  backgroundSize: "cover",
`;
const LatestArticle = styled.text`
  font-weight: 700;
  font-size: ${pxToRem(54)};
`;
export {
  TextWrap,
  TextWrap01,
  TextWrap02,
  TextWrap03,
  LatestArticle,
  TextWrap04,
  TextWrap05,
  Button,
  Image,
};
