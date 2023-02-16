import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
type HomeProps = {
  src?: string;
};
const Image = styled.img<HomeProps>`
  width: ${pxToRem(460)};
  height: ${pxToRem(200)};
  image: url(${(props: any) => props.src});
`;
const PostButton = styled.button`
  background: #2f2e41;
  height: ${pxToRem(22)};
  border-radius: 7.24416px;

  font-weight: 300;
  font-size: ${pxToRem(7)};
  @media (min-width: 768px) {
    font-size: ${pxToRem(12)};
    height: ${pxToRem(30)};
  }
  @media (min-width: 1024px) {
    font-size: ${pxToRem(15)};
    height: ${pxToRem(42)};
  }
`;
export { Image, PostButton };
