import GoogleLogo from "../assets/images/GoogleLogo.png";
import Grid from "@mui/material/Grid";
import {
  CreateAccountButton,
  Input,
  Form,
  GoogleLogo1,
  SignGoogleButton,
  TextWrap3,
  TextWrap1,
  TextWrap6,
  TextWrap7,
  TextWrap4,
  TextWrap5,
  TextWrap2,
  LoginLink,
} from "./registration.styled";
import { useGoogleLogin } from "@react-oauth/google";
import Rectangle1 from "../assets/images/Rectangle1.png";
import { useNavigate } from "react-router-dom";
import { FormValidate } from "../validate/formValidate";
import React from "react";
const Registration = () => {
  const Login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  const navigate = useNavigate();
  const navLogin = () => {
    navigate("/login");
  };
  return (
    <Grid container>
      <Grid
        item
        xs={100}
        sm={100}
        md={50}
        lg={9}
        style={{
          justifyContent: "center",
          alignContent: "center",
          backgroundImage: `url(${Rectangle1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <TextWrap4>SkillupAfrica Blog</TextWrap4>
        <TextWrap5>
          The Ancient city of Rome and the history of the great city.
        </TextWrap5>
        <TextWrap6>Olive Junior</TextWrap6>
        <TextWrap7>Lead Writer, SkillupAfrica</TextWrap7>
      </Grid>
      <Grid
        item
        xs={100}
        sm={100}
        md={50}
        lg={3}
        style={{ textAlign: "center", paddingTop: 142 }}
      >
        <Form>
          <form>
            <TextWrap1>Create an Account</TextWrap1>
            <br />
            <TextWrap2>Let's start a journey to great articles</TextWrap2>

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
            <CreateAccountButton onClick={FormValidate}>
              Create an Account
            </CreateAccountButton>
            <SignGoogleButton onClick={() => Login()}>
              <GoogleLogo1 src={GoogleLogo} />
              Sign up with Google
            </SignGoogleButton>
            <TextWrap3>
              Already have an account?
              <LoginLink onClick={navLogin}>Log in</LoginLink>
            </TextWrap3>
          </form>
        </Form>
      </Grid>
    </Grid>
  );
};
export default Registration;
