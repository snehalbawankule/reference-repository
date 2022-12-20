import styled from "styled-components";
type HomeProps = {
  src?: string;
};
const Header = styled.div`
  width: 1584px;
  height: 86px;
  display: flex;
`;
const TextWrap = styled.div`
  width: 204px;
  height: 29px;
  font-family: "Poppins";
  display-flex: 1;
  font-weight: 700;
  font-size: 24px;
  color: #2f2e41;
  margin-top: 37px;
  margin-left: 100px;
`;
const Navbar = styled.button`
  height: 29px;
  font-family: "Poppins";
  font-weight: 400;
  border: none;
  background: none;
  font-size: 24px;
  margin-left: 44px;
  margin-top: 37px;
  text-decoration-line: underline;
  color: #2f2e41;
`;
const SocialIcon = styled.button<HomeProps>`
  width: 39.02px;
  height: 39.02px;
  margin-left: 10px;
  border: none;
  background: none;
  margin-top: 32px;
  background-image: url(${(props) => props.src});
`;
const PostArticle = styled.button`
  width: 134.02px;
  height: 42.74px;
  font-family: "Poppins";
  font-style: italic;
  font-weight: 300;
  font-size: 14.4883px;
  margin-top: 30px;
  margin-left: 50px;
  color: #f3f2ff;
  background: #2f2e41;
  border-radius: 7.24416px;
`;
export { Header, TextWrap, Navbar, SocialIcon, PostArticle };
