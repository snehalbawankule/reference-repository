import styled from "styled-components";

const NewArticle = styled.div`
  width: 308px;
  height: 44px;
  margin-top: 50px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 36px;
  color: #2f2e41;
`;
const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 1024px;
  margin-left: 100px;
  background: #ffffff;
`;
const InputBox = styled.input`
  width: 1240px;
  height: 90px;
  background: #f9f8ff;
  padding-left: 30px;
  margin-top: 50px;
  border: 2px solid rgba(47, 46, 65, 0.15);
  border-radius: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 36px;
  color: #2f2e41;
`;
const PostButton = styled.button``;
export { NewArticle, InputBox, PostButton, Container };
