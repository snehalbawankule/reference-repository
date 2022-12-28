import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
type HomeProps = {
  src?: string;
};
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
const Image = styled.img<HomeProps>`
  width: ${pxToRem(460)};
  height: ${pxToRem(200)};
  image: url(${(props) => props.src});
`;
const Boxes = styled.div`
  width: ${pxToRem(460)};
  height: ${pxToRem(340)};
`;
export { PostArticle, Boxes, Image };
