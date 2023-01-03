import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
type HomeProps = {
  src?: string;
};
const Image = styled.img<HomeProps>`
  width: ${pxToRem(460)};
  height: ${pxToRem(200)};
  image: url(${(props) => props.src});
`;

export { Image };
