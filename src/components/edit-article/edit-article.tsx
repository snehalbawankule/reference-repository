import React, { useState } from "react";
import image from "../../assets/images/image.png";
import { Grid } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { actions } from "../../store/reducer";
import { PostButton } from "../add-post/add-post.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Input } from "../registration/registration.styled";
import useMediaQuery from "../../hooks/use-media-query";
const Edit = () => {
  const { id } = useParams<{ id: string }>();
  //const navigate = useNavigate();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id == id)
  );
  const [postInfo, setPostInfo] = useState({
    id: post?.id,
    title: post?.title,
    description: post?.description,
    content: post?.content,
  });
  const handleChange = (event: any) => {
    setPostInfo({ ...postInfo, [event.target.name]: event.target.value });
  };
  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      actions.postUpdate({
        id: id,
        title: postInfo.title,
        description: postInfo.description,
        content: postInfo.content,
      })
    );
    //navigate("/home");
  };

  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid
        container
        display="flex"
        sx={{
          mt: 20,
          px: isDesktop ? 5 : isTablet ? 7 : 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{
            height: isDesktop ? "750px" : isMobile ? "350px" : "600px",
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ mt: 4 }}
          display="flex"
          justifyContent="center"
        >
          <Input
            style={{ width: "800px" }}
            type="text"
            name="title"
            onBlur={handleChange}
            defaultValue={postInfo.title}
            placeholder="title"
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
          <Input
            style={{ width: "800px" }}
            type="text"
            name="description"
            onBlur={handleChange}
            defaultValue={postInfo.description}
            placeholder="description"
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
          <textarea
            style={{ width: "800px" }}
            rows={5}
            name="content"
            onBlur={handleChange}
            defaultValue={postInfo.content}
            placeholder="Content"
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
      </Grid>
    </form>
  );
};

export default Edit;
