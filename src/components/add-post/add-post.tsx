import { NewArticle, PostButton } from "./add-post.styled";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
const AddPost = () => {
  return (
    <Box
      display="column"
      justifyContent="center"
      sx={{
        m: 5,
        width: 700,
        maxWidth: "100%",
      }}
    >
      <NewArticle>Post a new article</NewArticle>
      <TextField fullWidth style={{ marginTop: 20 }} label="Blog Title" />
      <TextField style={{ marginTop: 20 }} fullWidth label="Image url" />
      <TextField fullWidth style={{ marginTop: 20 }} label="Blog Content" />
      <PostButton>Post</PostButton>
    </Box>
  );
};
export default AddPost;
