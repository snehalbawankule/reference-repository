import { NewArticle, PostButton } from "./add-post.styled";
import { Box } from "@mui/material";
//import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const AddPost = () => {
  //const dispatch = useAppDispatch();
  const [article, setArticle] = useState({
    title: "",
    image: "",
    content: "",
  });
  const handleChange = (event: any) => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  const onSavePostClicked = async () => {};
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
      <TextField
        fullWidth
        style={{ marginTop: 20 }}
        label="Blog Title"
        defaultValue={article.title}
        onBlur={handleChange}
      />
      <TextField
        style={{ marginTop: 20 }}
        fullWidth
        label="Image url"
        defaultValue={article.image}
        onBlur={handleChange}
      />
      <TextField
        fullWidth
        style={{ marginTop: 20 }}
        label="Blog Content"
        defaultValue={article.content}
        onBlur={handleChange}
      />
      <PostButton onClick={onSavePostClicked}>Post</PostButton>
    </Box>
  );
};
export default AddPost; /*
import { NewArticle, PostButton } from "./add-post.styled";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import TextField from "@mui/material/TextField";
import addNewArticle from "../../store/reducer";
import { Container } from "@mui/material";

export const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const [article, setArticle] = useState({
    title: "",
    image: "",
    content: "",
  });
  const handleChange = (event: any) => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  const onSavePostClicked = () => {
    dispatch(addNewArticle({ title, image, content }));
  };
  return (
    <Container>
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
        <TextField
          fullWidth
          name="title"
          style={{ marginTop: 20 }}
          onChange={handleChange}
          label="Blog Title"
        />
        <TextField
          style={{ marginTop: 20 }}
          fullWidth
          name="image"
          onChange={handleChange}
          label="Image url"
        />
        <TextField
          fullWidth
          name="content"
          style={{ marginTop: 20 }}
          onChange={handleChange}
          label="Blog Content"
        />
        <PostButton onClick={onSavePostClicked}>Post</PostButton>
      </Box>
    </Container>
  );
};
*/
