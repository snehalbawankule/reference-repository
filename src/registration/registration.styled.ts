import styled from "styled-components";
type RegistrationProps = {
  background?: string;
  src?: string;
};
const pxToRem = (size: number) => `${size / 16}rem`;
const TextWrap1 = styled.text`
  font-family: "Poppins";
  font-weight: 500;
  font-size: ${pxToRem(40)};
  color: #2f2e41;
`;
const TextWrap2 = styled.text`
  font-family: "Poppins";
  font-weight: 400;
  font-size: ${pxToRem(20)};
`;
const Container = styled.div`
  color: white;
`;
const Input = styled.input`
  width: 362px;
  font-family: "Poppins";
  font-weight: 300;
  font-size: ${pxToRem(17)};
  border-width: 0 0 2px;
  margin-bottom: ${pxToRem(56)};
  ::placeholder {
    color: #2f2e41bf;
  }
`;
const LoginLink = styled.button`
  font-family: "Poppins";
  border: none;
  text-decoration-line: underline;
  background: none;
  font-size: ${pxToRem(22)};
`;
const CreateAccountButton = styled.button`
  width: 363px;
  height: 58px;
  font-family: "Poppins";
  font-weight: 400;
  margin-top: ${pxToRem(50)};
  font-size: 21.6179px;
  color: #f3f2ff;
  align-item: center;
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
  padding-top: ${pxToRem(15)};
  font-size: 17.9653px;
  align-item: center;
  margin-top: ${pxToRem(25)};
  border: 1.79653px solid rgba(47, 46, 65, 0.15);
  border-radius: ${pxToRem(9)};
`;
const TextWrap3 = styled.h4`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 18px;
  color: #2f2e41;
`;
const TextWrap4 = styled.h4`
  padding-left: ${pxToRem(50)};
  padding-top: ${pxToRem(71)};
  font-family: "Poppins";
  font-weight: 700;
  font-size: 24px;
  color: #f3f2ff;
`;
const TextWrap5 = styled.h4`
  width: 789px;
  margin-top: ${pxToRem(695)};
  padding-left: ${pxToRem(50)};
  font-family: "Poppins";
  font-weight: 700;
  font-size: 48px;
  color: #f3f2ff;
`;
const Form = styled.div`
  width: 563px;
  height: 1024px;
`;
const TextWrap6 = styled.h4`
  font-family: "Poppins";
  font-weight: 500;
  padding-left: ${pxToRem(50)};
  margin-top: ${pxToRem(43)};
  font-size: 40px;
  color: #f3f2ff;
`;

const TextWrap7 = styled.h3`
  padding-left: ${pxToRem(50)};
  margin-top: ${pxToRem(-53)};
  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  color: #f3f2ff;
`;
const GoogleLogo1 = styled.img<RegistrationProps>`
  margin-left: ${pxToRem(67)};
  margin-right: ${pxToRem(16)};
  margin-top: ${pxToRem(-7)};

  background-image: url(${(props) => props.src});
`;

export {
  TextWrap1,
  TextWrap2,
  CreateAccountButton,
  SignGoogleButton,
  GoogleLogo1,
  Input,
  Form,
  Container,
  TextWrap6,
  TextWrap7,
  TextWrap3,
  TextWrap5,
  TextWrap4,
  LoginLink,
};
