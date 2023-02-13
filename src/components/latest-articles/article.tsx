import React, { useRef } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { TextWrap02, TextWrap03, TextWrap01 } from "./latest-article.styled";
import useMediaQuery from "../../hooks/use-media-query";
import "../../index.css";
import { Comments } from "../comments/comments";
import { AllReactions } from "../all-reactions/all-reactions";
const Article = () => {
  const { id } = useParams<{ id: string }>();

  var existingPost = JSON.parse(localStorage.getItem("articles") || "{}");
  var post = existingPost.find((item: any) => item.id === id);
  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  const textRef = useRef<HTMLDivElement>(null);
  function handleSelection() {
    const selectedText = window.getSelection()?.toString();
    if (selectedText && textRef.current) {
      const range = window.getSelection()!.getRangeAt(0);
      const span = document.createElement("span");
      span.className = "highlight";
      range.surroundContents(span);
    }
  }
  return (
    <Grid
      container
      display="flex"
      sx={{
        mt: isDesktop ? 15 : isTablet ? 12 : 10,
        px: isDesktop ? 5 : isTablet ? 5 : 4,
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
          backgroundImage: `url(${post?.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Grid container direction="row">
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <TextWrap01>{post.date}</TextWrap01>
        </Grid>
        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={2}
          display="flex"
          justifyContent="end"
        >
          <TextWrap01>{post.edited}</TextWrap01>
        </Grid>
      </Grid>
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
        <TextWrap02 ref={textRef} onMouseUp={handleSelection}>
          {post?.title}
        </TextWrap02>
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
        <TextWrap02
          style={{ fontWeight: 500, fontSize: 18 }}
          ref={textRef}
          onMouseUp={handleSelection}
        >
          {post?.description}
        </TextWrap02>
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
        <TextWrap03 ref={textRef} onMouseUp={handleSelection}>
          {post?.content}
        </TextWrap03>
      </Grid>
      <AllReactions post={post} />
      <Comments />
    </Grid>
  );
};
export default Article;
