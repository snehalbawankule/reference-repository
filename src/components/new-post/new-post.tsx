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

    dispatch(
      actions.addNewArticle({
        date: date,
        title: postInfo.title,
        url: postInfo.url,
        description: postInfo.description,
        content: postInfo.content,
      })
    );

    const existingPost = JSON.parse(localStorage.getItem("articles") || "{}");
    const lastId = existingPost.slice(-1)[0].id;
    const stringNumber = parseInt(lastId) + 1;
    const numberString = stringNumber.toString();
    console.log(existingPost);
    const art = {
      id: numberString,
      date: date,
      title: postInfo.title,
      url: postInfo.url,
      description: postInfo.description,
      content: postInfo.content,
    };
    console.log(existingPost);
    if (art.id) {
      if (!existingPost.includes(art.id)) {
        existingPost.push(art);
        localStorage.setItem("articles", JSON.stringify(existingPost));
      } else {
        console.log("Already added");
      }
    }
    navigate("/articles");
  };

  const { isDesktop, isMobile, isTablet } = useMediaQuery();

  return (
    <Grid
      container
      display="flex"
      sx={{
        pt: isDesktop ? 10 : isTablet ? 5 : 3,
        mt: 2,
        ml: 0,
        justifyContent: "center",
      }}
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
            style={{ marginTop: 50 }}
            type="text"
            name="title"
            onBlur={handleChange}
            defaultValue={postInfo.title}
            placeholder="Article title"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
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
          sx={{ justifyContent: isMobile ? "center" : "" }}
        >
          <PostButton>Post</PostButton>
        </Grid>
      </form>
    </Grid>
  );
};
export default NewPost;
