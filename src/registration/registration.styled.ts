import styled from "styled-components";
type RegistrationProps = {
  background?: string;
  src?: string;
};
const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 1024px;
  display: flex;
  background: #ffffff;
`;

const RectPic = styled.div<RegistrationProps>`
  width: 876px;
  height: 1024px;
  padding-left: 50px;
  background-image: url(${(props) => props.background});
`;
const TextWrap1 = styled.h1`
  width: 344px;
  height: 49px;
  font-family: "Poppins";
  padding-top: 142px;
  margin-top: 0px;
  font-weight: 500;
  font-size: 40px;
  color: #2f2e41;
`;
const TextWrap2 = styled.h3`
  width: 403px;
  height: 24px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 20px;
`;
const Input = styled.input`
  width: 362px;
  height: 21.43px;
  font-family: "Poppins";
  font-weight: 300;
  font-size: 17.9653px;
  border-width: 0 0 2px;
  margin-bottom: 56px;
  ::placeholder {
    color: #2f2e41bf;
  }
`;
const LoginLink = styled.button`
  font-family: "Poppins";
  border: none;
  text-decoration-line: underline;
  background: none;
  font-size: 22px;
`;
const CreateAccountButton = styled.button`
  width: 363px;
  height: 58px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 21.6179px;
  color: #f3f2ff;
  background: #2f2e41;
  border-radius: 9.00744px;
`;
const SignGoogleButton = styled.button`
  width: 363px;
  height: 58px;
  display: flex;
  background: none;
  color: #2f2e41;
  font-family: "Poppins";
  font-weight: 300;
  padding-top: 15px;
  font-size: 17.9653px;
  margin-top: 25px;
  border: 1.79653px solid rgba(47, 46, 65, 0.15);
  border-radius: 9.00744px;
`;
const Form = styled.div`
  width: 563px;
  padding-left: 98px;
  height: 1024px;
`;
const TextWrap3 = styled.h4`
  padding-left:60px;
  display:flex;
  height: 22px; "Poppins";
  font-weight: 300;
  font-size: 18px;
  color: #2f2e41;
`;
const TextWrap4 = styled.h4`
  width: 204px;
  height: 29px;
  margin-top: auto;
  padding-top: 71px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 24px;
  color: #f3f2ff;
`;
const TextWrap5 = styled.h4`
  width: 789px;
  height: 118px;
  margin-top: 595px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 48px;
  color: #f3f2ff;
`;

const TextWrap6 = styled.h4`
  width: 219px;
  height: 49px;
  font-family: "Poppins";
  font-weight: 500;
  margin-top: 43px;
  font-size: 40px;
  color: #f3f2ff;
`;

const TextWrap7 = styled.h3`
  width: 278px;
  height: 29px;
  margin-top: -53px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  color: #f3f2ff;
`;
const GoogleLogo1 = styled.img<RegistrationProps>`
  margin-left: 67px;
  margin-right: 16px;
  margin-top: -7px;
  background-image: url(${(props) => props.src});
`;

export {
  TextWrap1,
  TextWrap2,
  CreateAccountButton,
  SignGoogleButton,
  Container,
  GoogleLogo1,
  Input,
  TextWrap6,
  TextWrap7,
  TextWrap3,
  TextWrap5,
  TextWrap4,
  LoginLink,
  RectPic,
  Form,
};
