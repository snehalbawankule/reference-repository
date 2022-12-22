import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "../assets/images/GoogleLogo.png";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

import {
  CreateAccountButton,
  Input,
  SignGoogleButton,
  LoginLink,
  GoogleLogo1,
  TextWrap3,
  TextWrap1,
  TextWrap6,
  TextWrap7,
  TextWrap4,
  TextWrap5,
  TextWrap2,
} from "../registration/registration.styled";
import { Forget } from "./login.styled";
import Rectangle2 from "../assets/images/Rectangle2.png";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const navRegistration = () => {
    navigate("/");
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <TextWrap4>SkillupAfrica Blog</TextWrap4>
        <TextWrap5>
          The Ancient city of Rome and the history of the great city.
        </TextWrap5>
        <TextWrap6>Olive Junior</TextWrap6>
        <TextWrap7>Lead Writer, SkillupAfrica</TextWrap7>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextWrap1>Welcome Back!</TextWrap1>
        </Grid>
        <TextWrap2>Welcome back, please enter your details</TextWrap2>
        <SignGoogleButton onClick={() => login()}>
          <GoogleLogo1 src={GoogleLogo} />
          Sign up with Google
        </SignGoogleButton>
        <Divider>OR</Divider>

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
            style={{ marginBottom: 0 }}
            type="password"
            id="pass"
            name="password1"
            placeholder="Confirm Password"
            required
          />
          <Forget>Forget Password?</Forget>
          <CreateAccountButton style={{ marginTop: 50 }}>
            Login
          </CreateAccountButton>

          <TextWrap3>
            Not registered yet?
            <LoginLink onClick={navRegistration}>Create an Account</LoginLink>
          </TextWrap3>
        </form>
      </Grid>
    </Grid>
  );
};
export default Registration;
