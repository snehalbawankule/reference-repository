import {
  Container,
  NewArticle,
  InputBox,
  PostButton,
} from "../add-post/add-post.styled";
const ContactUs = () => {
  return (
    <Container>
      <NewArticle>Contact Us</NewArticle>
      <br></br>
      <InputBox placeholder="Enter your full name"></InputBox>
      <br></br>
      <InputBox placeholder="Email address" />
      <br></br>
      <InputBox
        style={{ width: 1240, height: 250, textAlign: "start" }}
        placeholder="Enter your message"
      ></InputBox>
      <PostButton>Post</PostButton>
    </Container>
  );
};
export default ContactUs;
