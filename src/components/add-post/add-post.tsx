import { NewArticle, PostButton } from "./add-post.styled";
import React from "react";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import TextField from "@mui/material/TextField";
const AddPost = () => {
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => state.articles.article);

  const onSavePostClicked = async () => {
    //dispatch(addNewArticle({ title, content, })).unwrap()
  };
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
      <PostButton onClick={onSavePostClicked}>Post</PostButton>
    </Box>
  );
};
export default AddPost;
