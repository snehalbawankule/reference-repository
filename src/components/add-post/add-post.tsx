import { NewArticle, PostButton } from "./add-post.styled";
import { Grid } from "@mui/material";
import { actions } from "../../store/reducer";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
import { useState } from "react";
const AddPost = () => {
  const [postInfo, setPostInfo] = useState({
    id: "",
    title: "",
    image: "",
    description: "",
    content: "",
  });
  const handleChange = (event: any) => {
    setPostInfo({ ...postInfo, [event.target.name]: event.target.value });
  };
  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(postInfo.title);
    dispatch(
      actions.addNewArticle({
        title: postInfo.title,
        description: postInfo.description,
        content: postInfo.content,
      })
    );
    //navigate("/home");
  };

  const { isDesktop, isTablet } = useMediaQuery();

  return (
    <Grid
      container
      sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3, mt: 5 }}
      spacing={5}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <NewArticle>Post a new article</NewArticle>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <TextField
          fullWidth
          style={{ marginTop: 20 }}
          label="Blog Title"
          defaultValue={postInfo.title}
          onBlur={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <TextField
          style={{ marginTop: 20 }}
          fullWidth
          label="Image url"
          defaultValue={postInfo.image}
          onBlur={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <TextField
          fullWidth
          style={{ marginTop: 20 }}
          label="Blog description"
          defaultValue={postInfo.description}
          onBlur={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <TextField
          fullWidth
          style={{ marginTop: 20 }}
          label="Blog Content"
          defaultValue={postInfo.content}
          onBlur={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <PostButton onClick={(e) => handleSubmit(e)}>Post</PostButton>
      </Grid>
    </Grid>
  );
};
export default AddPost;
