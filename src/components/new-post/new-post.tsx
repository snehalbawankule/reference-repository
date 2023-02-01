import { NewArticle, PostButton, NewPostInput } from "./new-post.styled";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";

import { useState } from "react";
import moment from "moment";
const NewPost = () => {
  const [postInfo, setPostInfo] = useState({
    id: "",
    date: "",
    title: "",
    url: "",
    description: "",
    content: "",
  });
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setPostInfo({ ...postInfo, [event.target.name]: event.target.value });
  };
  const dispatch = useAppDispatch();
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const date = moment().format("ll");
    console.log("hello");
    dispatch(
      actions.addNewArticle({
        date: date,
        title: postInfo.title,
        url: postInfo.url,
        description: postInfo.description,
        content: postInfo.content,
      })
    );
    navigate("/articles");
  };

  const { isDesktop, isTablet } = useMediaQuery();

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      sx={{ pt: isDesktop ? 10 : isTablet ? 5 : 3, mt: 2 }}
      spacing={5}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        display="flex"
        justifyContent="center"
      >
        <NewArticle>Post a new article</NewArticle>
      </Grid>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <NewPostInput
            style={{ marginTop: 25 }}
            type="text"
            name="title"
            onBlur={handleChange}
            defaultValue={postInfo.title}
            placeholder="Article title"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <NewPostInput
            type="text"
            name="url"
            onBlur={handleChange}
            defaultValue={postInfo.url}
            placeholder="image url"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <NewPostInput
            type="text"
            name="description"
            onBlur={handleChange}
            defaultValue={postInfo.description}
            placeholder="Article description"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <NewPostInput
            type="text"
            name="content"
            onBlur={handleChange}
            defaultValue={postInfo.content}
            placeholder="Article content"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <PostButton>Post</PostButton>
        </Grid>
      </form>
    </Grid>
  );
};
export default NewPost;
