import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import { Box, Grid } from "@mui/material";
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
  Form,
} from "../registration/registration.styled";
import { Forget } from "./login.styled";
import textwrap from "../textwrap/textwrap.json";
import Rectangle2 from "../../assets/images/Rectangle2.png";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
const Registration = () => {
  const { isTablet, isDesktop, isMobile } = useMediaQuery();
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
      <Grid item xs={12} sm={12} md={9} lg={9}>
        {textwrap &&
          textwrap.map(({ title, description, author, authorCategory }) => (
            <Box
              style={{
                backgroundImage: `url(${Rectangle2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={7}
                lg={6}
                sx={{ pl: isDesktop ? 10 : 4, pt: isDesktop ? 5 : 1 }}
              >
                <TextWrap4>{title}</TextWrap4>
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                md={8}
                lg={8}
                sx={{ pl: isDesktop ? 10 : 4, pt: isMobile ? 15 : 60 }}
              >
                <TextWrap5>{description}</TextWrap5>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{ pl: isDesktop ? 10 : 4 }}
              >
                <TextWrap6>{author}</TextWrap6>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{
                  pl: isDesktop ? 10 : 4,
                  mt: isMobile ? -3 : -5,
                  pb: isMobile ? 3 : 8,
                }}
              >
                <TextWrap7>{authorCategory}</TextWrap7>
              </Grid>
            </Box>
          ))}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        display="flex-column"
        style={{
          paddingLeft: isDesktop ? "70px" : isTablet ? "40px" : "10px",
          justifyContent: isDesktop ? "flex" : isTablet ? "center" : "center",
          textAlign: "center",
          alignItems: "center",
          paddingTop: 142,
        }}
      >
        {textwrap &&
          textwrap.map(
            ({
              welcome,
              loginDescription,
              notRegisterd,
              registerLink,
              googleSignIn,
            }) => (
              <Box>
                <TextWrap1>{welcome}</TextWrap1>
                <br />
                <TextWrap2>{loginDescription}</TextWrap2>

                <SignGoogleButton
                  style={{ marginTop: 77 }}
                  onClick={() => login()}
                >
                  <GoogleLogo1 src={GoogleLogo} />
                  {googleSignIn}
                </SignGoogleButton>
                <Divider style={{ marginTop: 65, paddingLeft: 100 }}>
                  OR
                </Divider>

                <form onSubmit={navHome}>
                  <Input
                    style={{ marginTop: 90, marginBottom: 76 }}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />

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
                    {notRegisterd}
                    <LoginLink onClick={navRegistration}>
                      {registerLink}
                    </LoginLink>
                  </TextWrap3>
                </form>
              </Box>
            )
          )}
      </Grid>
    </Grid>
  );
};
export default Registration;
