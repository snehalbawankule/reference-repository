import GoogleLogo from "../../assets/images/GoogleLogo.png";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import textwrap from "../textwrap/textwrap.json";
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
        {/*{textwrap && textwrap.map(({id, title})=>(

        ))}*/}
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
            <TextWrap1>Create an Account</TextWrap1>
            <br />
            <TextWrap2>Let's start a journey to great articles</TextWrap2>

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
                marginLeft: isDesktop ? "85px" : isTablet ? "100px" : "100px",
              }}
              onClick={() => Login()}
            >
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
