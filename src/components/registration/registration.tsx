import GoogleLogo from "../../assets/images/GoogleLogo.png";
import { useState } from "react";
import {
  CreateAccountButton,
  Input,
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
import { Box, Grid } from "@mui/material";
import textwrap from "../textwrap/textwrap.json";
import { useGoogleLogin } from "@react-oauth/google";
import Rectangle1 from "../../assets/images/Rectangle1.png";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";

const Registration = () => {
  const { isMobile, isDesktop } = useMediaQuery();
  const Login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (userInfo.password === userInfo.password1) {
      console.log(userInfo);
      setUserInfo({ name: "", email: "", password: "", password1: "" });
      navLogin();
    } else {
      alert("Passwords Don't Match");
    }
  };

  const handleChange = (event: any) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  const navLogin = () => {
    navigate("/login");
  };
  return (
    <Grid container style={{ background: "white" }}>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        {textwrap &&
          textwrap.map(({ title, description, author, authorCategory }) => (
            <Box
              style={{
                backgroundImage: `url(${Rectangle1})`,
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
        md={12}
        lg={4}
        display="block"
        sx={{ px: isDesktop ? 4 : "" }}
        style={{
          justifyContent: isDesktop ? "flex-start" : "center",
          textAlign: "center",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {textwrap &&
            textwrap.map(
              ({
                createAccount,
                accountDescription,
                alreadyHas,
                googleSignUp,
                loginLink,
                createAccountButton,
              }) => (
                <Box sx={{ pt: isDesktop ? 10 : 3 }}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextWrap1>{createAccount}</TextWrap1>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextWrap2>{accountDescription}</TextWrap2>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    sx={{ marginTop: 4 }}
                  >
                    <Input
                      type="text"
                      name="name"
                      onBlur={handleChange}
                      defaultValue={userInfo.name}
                      placeholder="Name"
                      minLength={5}
                      maxLength={10}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      onBlur={handleChange}
                      defaultValue={userInfo.email}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Input
                      type="text"
                      name="profilepic"
                      placeholder="Add Profile Picture"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Input
                      type="password"
                      id="pass10"
                      name="password"
                      onBlur={handleChange}
                      defaultValue={userInfo.password}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      placeholder="Password"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Input
                      type="password"
                      id="pass20"
                      name="password1"
                      onChange={handleChange}
                      defaultValue={userInfo.password1}
                      placeholder="Confirm Password"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CreateAccountButton>
                      {createAccountButton}
                    </CreateAccountButton>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <SignGoogleButton onClick={() => Login()}>
                      <GoogleLogo1 src={GoogleLogo} />
                      {googleSignUp}
                    </SignGoogleButton>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextWrap3>
                      {alreadyHas}
                      <LoginLink onClick={navLogin}>{loginLink}</LoginLink>
                    </TextWrap3>
                  </Grid>
                </Box>
              )
            )}
        </form>
      </Grid>
    </Grid>
  );
};
export default Registration;
