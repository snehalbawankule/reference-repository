import React, { useRef } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { StarRating } from "star-rating-react-ts";
import { TextWrap02, TextWrap03, TextWrap01 } from "./latest-article.styled";
import { useAppSelector } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
import "../../index.css";
import { Comments } from "../comments/comments";
const Article = () => {
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id === id)
  );
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
          backgroundImage: `url(${post?.url})`,
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
        <TextWrap02 ref={textRef} onMouseUp={handleSelection}>
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
      <Comments />
    </Grid>
  );
};
export default Article;
