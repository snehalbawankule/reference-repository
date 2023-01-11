import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const PostButton = styled.button`
  color: black;
  font-weight: 700;
  font-size: ${pxToRem(14)};
`;
export { PostButton };
