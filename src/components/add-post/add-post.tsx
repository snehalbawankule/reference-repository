import { NewArticle, PostButton } from "./add-post.styled";
import { Grid } from "@mui/material";
//import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import TextField from "@mui/material/TextField";
import useMediaQuery from "../../hooks/use-media-query";
import { useState } from "react";
const AddPost = () => {
  //const dispatch = useAppDispatch();

  const { isDesktop, isTablet } = useMediaQuery();
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
          defaultValue={article.title}
          onBlur={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <TextField
          style={{ marginTop: 20 }}
          fullWidth
          label="Image url"
          defaultValue={article.image}
          onBlur={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <TextField
          fullWidth
          style={{ marginTop: 20 }}
          label="Blog Content"
          defaultValue={article.content}
          onBlur={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <PostButton onClick={onSavePostClicked}>Post</PostButton>
      </Grid>
    </Grid>
  );
};
export default AddPost;
