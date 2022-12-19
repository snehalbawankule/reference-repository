import React from "react";
import {
  Container,
  CreateAccountButton,
  Input,
  SignGoogleButton,
  RectPic,
  Form,
  LoginLink,
  TextWrap3,
  TextWrap1,
  TextWrap6,
  TextWrap7,
  TextWrap4,
  TextWrap5,
  TextWrap2,
} from "../registration/registration.styled";
import { Horizontal, Forget } from "./login.styled";
import Rectangle2 from "../assets/images/Rectangle2.png";
//import GoogleLogo from "../assets/images/GoogleLogo.png";
//import {useNavigate } from 'react-router-dom';
//import { FormValidate } from "../validate/formValidate";
//import { RoboText } from "../login/Login.styled";

const Registration = () => {
  /* const navigate = useNavigate();
  const navLogin = () => {
    navigate('/login');
  };*/
  return (
    <Container>
      <RectPic background={Rectangle2}>
        <TextWrap4>SkillupAfrica Blog</TextWrap4>
        <TextWrap5>
          The Ancient city of Rome and the history of the great city.
        </TextWrap5>
        <TextWrap6>Olive Junior</TextWrap6>
        <TextWrap7>Lead Writer, SkillupAfrica</TextWrap7>
      </RectPic>
      <Form>
        <TextWrap1>Welcome Back!</TextWrap1>
        <TextWrap2>Welcome back, please enter your details</TextWrap2>
        <SignGoogleButton>Sign in with Google</SignGoogleButton>
        <Horizontal>or</Horizontal>
        <form>
          <Input
            style={{ marginTop: 61 }}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <br></br>
          <Input
            type="password"
            id="pass"
            name="password1"
            placeholder="Confirm Password"
            required
          />
          <Forget>Forget Password</Forget>
          <CreateAccountButton>Login</CreateAccountButton>

          <TextWrap3>
            Not registered yet?<LoginLink>Create an Account</LoginLink>
          </TextWrap3>
        </form>
      </Form>
    </Container>
  );
};
export default Registration;
