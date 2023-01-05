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
  font-size: ${pxToRem(15)};
  @media (max-width: 1024px) {
    font-size: ${pxToRem(7)};
    height: ${pxToRem(22)};
  }
`;

export { Image, PostButton };
