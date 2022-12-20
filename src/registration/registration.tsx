import GoogleLogo from "../assets/images/GoogleLogo.png";
import Grid from "@mui/material/Grid"; // Grid version 1
import {
  Container,
  CreateAccountButton,
  Input,
  RectPic,
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
const Registration = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  const navigate = useNavigate();
  const navLogin = () => {
    navigate("/login");
  };
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 8 }}
      columns={{ xs: 4, sm: 4, md: 12 }}
    >
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <RectPic background={Rectangle1}>
          <TextWrap4>SkillupAfrica Blog</TextWrap4>
          <TextWrap5>
            The Ancient city of Rome and the history of the great city.
          </TextWrap5>
          <TextWrap6>Olive Junior</TextWrap6>
          <TextWrap7>Lead Writer, SkillupAfrica</TextWrap7>
        </RectPic>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
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
            <CreateAccountButton onClick={FormValidate}>
              Create an Account
            </CreateAccountButton>
            <SignGoogleButton onClick={() => login()}>
              <GoogleLogo1 src={GoogleLogo} />
              Sign up with Google
            </SignGoogleButton>
          </form>
          <TextWrap3>
            Already have an account?
            <LoginLink onClick={navLogin}>Log in</LoginLink>
          </TextWrap3>
        </Form>
      </Grid>
    </Grid>
  );
};
export default Registration;
