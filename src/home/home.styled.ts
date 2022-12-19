import styled from "styled-components";
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

export { Header, TextWrap, Navbar };
