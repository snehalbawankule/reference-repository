import GoogleLogo from "../../assets/images/GoogleLogo.png";
import { useState } from "react";
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
import { Box, Grid } from "@mui/material";
import textwrap from "../textwrap/textwrap.json";
import { useGoogleLogin } from "@react-oauth/google";
import Rectangle1 from "../../assets/images/Rectangle1.png";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";

const Registration = () => {
  const { isTablet, isMobile, isDesktop } = useMediaQuery();
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
      <Grid
        item
        xs={100}
        sm={100}
        md={50}
        lg={9}
        style={{
          alignContent: "center",
          backgroundImage: `url(${Rectangle1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {textwrap &&
          textwrap.map(({ title, description, author, authorCategory }) => (
            <Box>
              <TextWrap4>{title}</TextWrap4>
              <TextWrap5>{description}</TextWrap5>
              <TextWrap6>{author}</TextWrap6>
              <TextWrap7>{authorCategory}</TextWrap7>
            </Box>
          ))}
      </Grid>
      <Grid
        item
        xs={100}
        sm={100}
        md={50}
        lg={3}
        display="flex-column"
        style={{
          paddingLeft: isMobile ? "100px" : isTablet ? "120px" : "20px",
          justifyContent: isDesktop ? "flex-start" : "center",
          textAlign: "center",
          alignItems: isMobile ? "center" : "flex-start",
          paddingTop: 142,
        }}
      >
        <Form>
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
                }) => (
                  <Box>
                    <TextWrap1>{createAccount}</TextWrap1>
                    <br />
                    <TextWrap2>{accountDescription}</TextWrap2>

                    <Input
                      type="text"
                      style={{ marginTop: 63 }}
                      name="name"
                      onBlur={handleChange}
                      defaultValue={userInfo.name}
                      placeholder="Name"
                      minLength={5}
                      maxLength={10}
                      required
                    />

                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      onBlur={handleChange}
                      defaultValue={userInfo.email}
                      required
                    />

                    <Input
                      type="text"
                      name="profilepic"
                      placeholder="Add Profile Picture"
                      required
                    />
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

                    <Input
                      type="password"
                      id="pass20"
                      name="password1"
                      onChange={handleChange}
                      defaultValue={userInfo.password1}
                      placeholder="Confirm Password"
                      required
                    />
                    <CreateAccountButton>Create an Account</CreateAccountButton>
                    <SignGoogleButton
                      style={{
                        marginLeft: isDesktop
                          ? "85px"
                          : isTablet
                          ? "100px"
                          : "100px",
                      }}
                      onClick={() => Login()}
                    >
                      <GoogleLogo1 src={GoogleLogo} />
                      {googleSignUp}
                    </SignGoogleButton>
                    <TextWrap3>
                      {alreadyHas}
                      <LoginLink onClick={navLogin}>{loginLink}</LoginLink>
                    </TextWrap3>
                  </Box>
                )
              )}
          </form>
        </Form>
      </Grid>
    </Grid>
  );
};
export default Registration;
