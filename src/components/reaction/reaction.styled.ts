import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const PostButton = styled.button`
  color: #ffffff;
  height: 30px;
  font-weight: 300;
  margin-left: ${pxToRem(14)};
  font-size: ${pxToRem(16)};
  padding-left: ${pxToRem(20)};
  padding-right: ${pxToRem(20)};
  background: #2f2e41;
  border-radius: ${pxToRem(10)};
`;
const Input = styled.input`
  font-weight: 300;
  width: ${pxToRem(260)};
  font-size: ${pxToRem(17)};
  border-width: 0 0 2px;
  margin-bottom: ${pxToRem(10)};
  @media (max-width: 767px) {
    margin-bottom: ${pxToRem(30)};
  }
  @media (min-width: 1200px) {
    width: ${pxToRem(300)};
  }
  @media (min-width: 1400px) {
    width: ${pxToRem(300)};
  }
`;
export { PostButton, Input };
