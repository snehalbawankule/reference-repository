import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
const NewArticle = styled.div`
  width: ${pxToRem(308)};
  height: ${pxToRem(44)};
  margin-top: 50px;
  font-weight: 700;
  font-size: 36px;
  color: #2f2e41;
`;
const PostButton = styled.button`
  width: ${pxToRem(178)};
  height: ${pxToRem(58)};
  margin-top: ${pxToRem(50)};
  color: white;
  font-weight: 700;
  font-size: ${pxToRem(24)};
  background: #2f2e41;
  border-radius: 9.62162px;
`;
export { NewArticle, PostButton };
