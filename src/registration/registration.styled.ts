import styled from "styled-components";
type RegistrationProps = {
  background?: string;
};
const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 1024px;
  display: flex;
  background: #ffffff;
`;

const RectPic = styled.div<RegistrationProps>`
  flex: 1;
  width: 876px;
  height: 1024px;
  background-image: url(${(props) => props.background});
`;
const TextWrap1 = styled.h1`
  width: 344px;
  height: 49px;
  font-family: "Helvetica Neue";
  padding-top: 142px;
  font-weight: 500;
  font-size: 40px;
  color: #2f2e41;
`;
const TextWrap2 = styled.h3`
  width: 403px;
  height: 24px;
  font-family: "Helvetica Neue";
  font-weight: 400;
  font-size: 20px;
`;
const Input = styled.input`
  width: 362px;
  height: 21.43px;
  font-family: "Helvetica Neue";
  font-weight: 300;
  font-size: 17.9653px;
  border-width: 0 0 2px;
  margin-bottom: 56px;
  ::placeholder {
    color: rgba(47, 46, 65, 0.75);
  }
`;
const LoginLink = styled.button`
  font-family: "Roboto", sans-serif;
  color: #2ed2c9;
  border: none;
  font-size: 22px;
`;
const CreateAccountButton = styled.button`
  width: 363px;
  height: 58px;
  font-family: "Helvetica Neue";
  font-weight: 400;
  font-size: 21.6179px;
  color: #f3f2ff;
  background: #2f2e41;
  border-radius: 9.00744px;
`;
const SignGoogleButton = styled.button`
  width: 363px;
  height: 58px;
  font-family: "Helvetica Neue";
  font-weight: 300;
  font-size: 17.9653px;
  margin-top: 25px;
  color: #2f2e41;
  border: 1.79653px solid rgba(47, 46, 65, 0.15);
  border-radius: 9.00744px;
`;
const Form = styled.div`
  width: 563px;
  padding-left: 98px;
  height: 1024px;
  left: 1440px;
  top: 0px;
`;

export {
  TextWrap1,
  TextWrap2,
  CreateAccountButton,
  SignGoogleButton,
  Container,
  Input,
  LoginLink,
  RectPic,
  Form,
};
