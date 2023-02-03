import React, { useRef } from "react";
import { Grid, Card, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  TextWrap02,
  TextWrap03,
} from "../latest-articles/latest-article.styled";

import useMediaQuery from "../../hooks/use-media-query";
const TechArticle = () => {
  const { id } = useParams<{ id: string }>();
  var existingPost = JSON.parse(localStorage.getItem("articles") || "{}");
  var post = existingPost.find((item: any) => item.id === id);

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
              backgroundImage: `url(${post?.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            key={id}
          />
          <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
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
            <TextWrap03 ref={textRef} onMouseUp={handleSelection}>
              {post?.description}
            </TextWrap03>
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
        </Box>
      </Card>
    </Grid>
  );
};
export default TechArticle;
