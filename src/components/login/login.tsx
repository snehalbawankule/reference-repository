import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import { validate } from "../validate/validate";
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
  Form,
} from "../registration/registration.styled";
import { Forget } from "./login.styled";
import Rectangle2 from "../../assets/images/Rectangle2.png";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
const Registration = () => {
  const { isTablet, isDesktop } = useMediaQuery();
  const navigate = useNavigate();
  const navRegistration = () => {
    navigate("/");
  };
  const navHome = () => {
    navigate("/home");
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <Grid container style={{ background: "white" }}>
      <Grid
        item
        xs={100}
        sm={100}
        md={50}
        lg={9}
        style={{
          alignContent: "center",
          backgroundImage: `url(${Rectangle2})`,
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
        display="flex-column"
        style={{
          paddingLeft: isDesktop ? "70px" : isTablet ? "40px" : "150px",
          justifyContent: isDesktop ? "" : "center",
          textAlign: "center",
          alignItems: "center",
          paddingTop: 142,
        }}
      >
        <Form>
          <TextWrap1>Welcome Back!</TextWrap1>
          <br />
          <TextWrap2>Welcome back, please enter your details</TextWrap2>
          <SignGoogleButton
            style={{ marginTop: 77, marginLeft: 100 }}
            onClick={() => login()}
          >
            <GoogleLogo1 src={GoogleLogo} />
            Sign up with Google
          </SignGoogleButton>
          <Divider style={{ marginTop: 65, width: 363, paddingLeft: 100 }}>
            OR
          </Divider>

          <form
            onSubmit={() => {
              validate();
              navHome();
            }}
          >
            <Input
              style={{ marginTop: 90, marginBottom: 76 }}
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
            <br />
            <Forget>Forget Password?</Forget>
            <br />
            <CreateAccountButton style={{ marginTop: 50 }}>
              Login
            </CreateAccountButton>

            <TextWrap3>
              Not registered yet?
              <LoginLink onClick={navRegistration}>Create an Account</LoginLink>
            </TextWrap3>
          </form>
        </Form>
      </Grid>
    </Grid>
  );
};
export default Registration;
