import React, { useState } from "react";
import image from "../../assets/images/image.png";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { actions } from "../../store/reducer";
import { PostButton } from "../add-post/add-post.styled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Input } from "../registration/registration.styled";
import useMediaQuery from "../../hooks/use-media-query";
const Edit = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id == id)
  );
  console.log(post);
  const [userInfo, setUserInfo] = useState({
    id: post?.id,
    title: post?.title,
    description: post?.description,
  });
  console.log(userInfo);
  const handleChange = (event: any) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const dispatch = useAppDispatch();
  const [content, setContent] = useState(post?.content);
  //const navigate = useNavigate();
  const onContentChanged = (e: any) => setContent(e.target.value);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    /* const newTodo = {
      id: id,
      title: userInfo.title,
      description: userInfo.description,
    };
    console.log(newTodo);*/
    dispatch(
      actions.postUpdate({
        id: id,
        title: userInfo.title,
        description: userInfo.description,
      })
    );
    // history.push(`/posts/${postId}`)
  };

  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  return (
    <form>
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
            defaultValue={userInfo.title}
            placeholder="Name"
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
            defaultValue={userInfo.description}
            placeholder="Name"
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
          <textarea value={content} onBlur={onContentChanged}></textarea>
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
          <PostButton onClick={(e) => handleSubmit(e)}>Post</PostButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default Edit;
