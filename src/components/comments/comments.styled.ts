import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const CommentsBox = styled.div`
  overflow-y: scroll;
  height: ${pxToRem(680)};
  width: ${pxToRem(330)};
`;
export { CommentsBox };
