import React, { useState } from "react";
import moment from "moment";

import { Grid, TextareaAutosize } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { actions } from "../../store/reducer";
import { PostButton } from "../new-post/new-post.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
//import * as Grammarly from "@grammarly/editor-sdk";
import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import useMediaQuery from "../../hooks/use-media-query";
import { TextWrap2 } from "../registration/registration.styled";
//import Schedule from "react-schedule-job";
const Edit = () => {
  const demoClientId = "client_T8syY4Z5DW378x72iosNSK";
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id === id)
  );
  //Grammarly.init("client_T8syY4Z5DW378x72iosNSK");
  const [postInfo, setPostInfo] = useState({
    id: post?.id,
    title: post?.title,
    url: post?.url,
    description: post?.description,
    content: post?.content,
    date: post?.date,
  });
  const handleChange = (event: any) => {
    setPostInfo({ ...postInfo, [event.target.name]: event.target.value });
  };
  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const date = moment().format("ll");
    navigate("/home");
    setTimeout(() => {
      const edited = "Edited";
      dispatch(
        actions.postUpdate({
          id: id,
          title: postInfo.title,
          description: postInfo.description,
          content: postInfo.content,
          date: date,
          edited: edited,
        })
      );
    }, 1000);
  };

  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/*<Grammarly clientId={demoClientId}>*/}
      <Grid
        container
        display="flex"
        sx={{
          mt: 20,
          px: isDesktop ? 5 : isTablet ? 7 : 4,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ mx: isDesktop ? "200px" : isMobile ? "" : "30px" }}
          style={{
            height: isDesktop ? "750px" : isMobile ? "350px" : "600px",
            backgroundImage: `url(${postInfo.url})`,
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
          display="flex"
          justifyContent="center"
          direction="column"
          sx={{ mt: 4, ml: isDesktop ? "300px" : isMobile ? "350px" : "600px" }}
        >
          <TextWrap2 style={{ fontWeight: 500 }}>Title</TextWrap2>

          <GrammarlyEditorPlugin>
            <TextareaAutosize
              style={{
                width: isDesktop ? "800px" : isMobile ? "350px" : "600px",
                borderStyle: "none",
                marginTop: 5,
              }}
              spellCheck="true"
              name="title"
              maxLength={100}
              onBlur={handleChange}
              defaultValue={postInfo.title}
              placeholder="title"
              required
            />
          </GrammarlyEditorPlugin>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
          direction="column"
          sx={{ ml: isDesktop ? "300px" : isMobile ? "350px" : "600px" }}
        >
          <TextWrap2 style={{ fontWeight: 500 }}>Description</TextWrap2>

          <GrammarlyEditorPlugin>
            <TextareaAutosize
              style={{
                width: isDesktop ? "800px" : isMobile ? "350px" : "600px",
                borderStyle: "none",
                marginTop: 5,
              }}
              spellCheck="true"
              name="description"
              maxLength={150}
              onBlur={handleChange}
              defaultValue={postInfo.description}
              placeholder="Description"
              required
            />
          </GrammarlyEditorPlugin>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          direction="column"
          justifyContent="center"
          sx={{ ml: isDesktop ? "300px" : isMobile ? "350px" : "600px" }}
        >
          <TextWrap2 style={{ fontWeight: 500 }}>Content</TextWrap2>
          <GrammarlyEditorPlugin clientId={demoClientId}>
            <TextareaAutosize
              style={{
                width: isDesktop ? "800px" : isMobile ? "350px" : "600px",
                borderStyle: "none",
                marginTop: 5,
              }}
              spellCheck="true"
              name="content"
              onBlur={handleChange}
              defaultValue={postInfo.content}
              placeholder="Content"
              required
            />
          </GrammarlyEditorPlugin>
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
          <PostButton style={{ marginBottom: 50 }}>Post</PostButton>
        </Grid>
      </Grid>
      {/*</Grammarly>*/}
    </form>
  );
};

export default Edit;
