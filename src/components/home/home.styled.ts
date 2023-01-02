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
  color: #e6e6e6;
  font-family: "Poppins";
  font-size: 6rem;
`;
const TextWrap05 = styled.div`
  color: #e6e6e6;
  font-family: "Poppins";
  font-size: 2rem;
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
const Image1 = styled.div<HomeProps>`
  height: ${pxToRem(750)};
  background-position: "center";
  background-size: "cover";
  background-image: url(${(props) => props.src});
`;
const Image = styled.img<HomeProps>`
  border-radius: ${pxToRem(10)};
  background-image: url(${(props) => props.src});
`;

export {
  TextWrap,
  Image1,
  TextWrap01,
  TextWrap02,
  TextWrap03,
  TextWrap04,
  TextWrap05,
  PostArticle,
  Image,
};
