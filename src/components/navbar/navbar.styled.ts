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
const PostButton = styled.button`
  background: #2f2e41;
  height: ${pxToRem(42)};
  border-radius: 7.24416px;
  font-style: italic;
  font-weight: 300;
  font-size: 14.4883px;
  color: #f3f2ff;
`;

export { Image, PostButton };
