import { Container, NewArticle, InputBox, PostButton } from "./add-post.styled";
const AddPost = () => {
  return (
    <Container>
      <NewArticle>Post a new article</NewArticle>
      <br></br>
      <InputBox placeholder="Blog Title"></InputBox>
      <br></br>
      <InputBox placeholder="Image url" />
      <br></br>
      <InputBox
        style={{ width: 1240, height: 520 }}
        placeholder="Blog Content"
      ></InputBox>
      <PostButton>Post</PostButton>
    </Container>
  );
};
export default AddPost;
