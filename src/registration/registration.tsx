import React from "react";
import {
  Container,
  CreateAccountButton,
  Input,
  SignGoogleButton,
  RectPic,
  Form,
  TextWrap1,
  TextWrap2,
} from "./registration.styled";
import Rectangle1 from "../assets/images/Rectangle1.png";
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
      <RectPic background={Rectangle1}></RectPic>
      <Form>
        <TextWrap1>Create an Account</TextWrap1>
        <TextWrap2>Let's start a journey to great articles</TextWrap2>
        <form>
          <Input
            type="text"
            style={{ marginTop: 63 }}
            name="name"
            placeholder="Name"
            minLength={5}
            maxLength={10}
            required
          />
          <br></br>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <br></br>
          <Input
            type="password"
            name="profilepic"
            placeholder="Add Profile Picture"
            required
          />
          <br></br>
          <Input
            type="password"
            id="pass10"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            placeholder="Password"
            required
          />
          <br></br>
          <Input
            type="password"
            id="pass20"
            name="password1"
            placeholder="Confirm Password"
            required
          />
          <CreateAccountButton>Create an Account</CreateAccountButton>
          <SignGoogleButton>Create an Account</SignGoogleButton>
        </form>
      </Form>
    </Container>
  );
};
export default Registration;
