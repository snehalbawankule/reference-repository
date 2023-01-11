import React, { useEffect, useState } from "react";
import image from "../../assets/images/image.png";
import { Grid, Card, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextWrap02, TextWrap03 } from "../article/article.styled";
import textwrap from "../textwrap/textwrap.json";
import { addArticle } from "../../store/services";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Input } from "../registration/registration.styled";
import useMediaQuery from "../../hooks/use-media-query";
const Edit = (props: any) => {
  const { postId } = props;

  //const { id } = post;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);

  const post = useAppSelector((state) =>
    state.articles.article.find((article) => article.id === postId)
  );
  console.log(post);
  const [title, setTitle] = useState(post?.title);
  const [description, setDescription] = useState(post?.description);
  const [content, setContent] = useState(post?.content);
  //const history = useHistory();
  const onDescriptionChanged = (e: any) => setDescription(e.target.value);
  //const onTitleChanged = (e: any) => setTitle(e.target.value);
  const onContentChanged = (e: any) => setContent(e.target.value);

  /*const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  };*/

  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      display="flex"
      sx={{
        mt: 20,
        px: isDesktop ? 10 : isTablet ? 7 : 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          border: "none",
          boxShadow: "none",
          justifyContent: isMobile ? "center" : "flex",
        }}
      >
        <Box>
          <Box
            style={{
              alignContent: "center",
              height: isMobile ? "300px" : isDesktop ? "1000px" : "616px",
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
            <Input value={title}></Input>
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
            <Input value={description} onBlur={onDescriptionChanged}></Input>
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
        </Box>
      </Card>
    </Grid>
  );
};

export default Edit;
