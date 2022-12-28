import { NewArticle, PostButton } from "../add-post/add-post.styled";
import { Box} from "@mui/material";

import TextField from "@mui/material/TextField";
const ContactUs = () => {
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
      <NewArticle>Contact Us</NewArticle>
      <TextField fullWidth style={{ marginTop: 20 }} label="Enter full name" />
      <TextField style={{ marginTop: 20 }} fullWidth label="Enter Email" />
      <TextField fullWidth style={{ marginTop: 20 }} label="Contact No" />
      <TextField fullWidth style={{ marginTop: 20 }} label="Enter message" />
      <PostButton>Post</PostButton>
    </Box>
  );
};
export default ContactUs;
