import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import { Box, Grid, Divider } from "@mui/material";
import {
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
import { Forget, LoginButton } from "./login.styled";
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
          justifyContent: isDesktop ? "flex" : isTablet ? "center" : "center",
          textAlign: "center",
          alignItems: "center",
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
              forgotPassword,
              loginButton,
            }) => (
              <Box sx={{ pt: isDesktop ? 10 : 3 }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextWrap1>{welcome}</TextWrap1>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextWrap2>{loginDescription}</TextWrap2>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{ pt: isDesktop ? 5 : 1 }}
                >
                  <SignGoogleButton onClick={() => login()}>
                    <GoogleLogo1 src={GoogleLogo} />
                    {googleSignIn}
                  </SignGoogleButton>
                </Grid>
                <Divider style={{ marginTop: 65 }}>OR</Divider>

                <form onSubmit={navHome}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    sx={{ marginTop: isMobile ? 5 : 15 }}
                  >
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    sx={{ marginTop: 5 }}
                  >
                    <Input
                      style={{ marginBottom: 0 }}
                      type="password"
                      id="pass"
                      name="password1"
                      placeholder="Confirm Password"
                      required
                    />
                  </Grid>
                  <Forget>{forgotPassword}</Forget>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <LoginButton style={{ marginTop: 50 }}>
                      {loginButton}
                    </LoginButton>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextWrap3>
                      {notRegisterd}
                      <LoginLink onClick={navRegistration}>
                        {registerLink}
                      </LoginLink>
                    </TextWrap3>
                  </Grid>
                </form>
              </Box>
            )
          )}
      </Grid>
    </Grid>
  );
};
export default Registration;
