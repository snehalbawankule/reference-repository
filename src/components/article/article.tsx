import React, { useEffect } from "react";
import techupdate from "../../assets/images/techupdate.png";
import { Grid, Card, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextWrap02, TextWrap03 } from "./article.styled";
import textwrap from "../textwrap/textwrap.json";
import { addArticle } from "../../store/services";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
const Article = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);
  const articles = useAppSelector((state) => state.articles.article);
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
        px: isDesktop ? 12 : isTablet ? 7 : 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {textwrap.map(({ articleTitle, articleDescription, articleContent }) => (
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
                height: isMobile ? "300px" : "616px",
                backgroundImage: `url(${techupdate})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              key={id}
            />
            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
              <TextWrap02>{articleTitle}</TextWrap02>
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
              <TextWrap03>{articleDescription}</TextWrap03>
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
              <TextWrap03>{articleContent}</TextWrap03>
            </Grid>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export default Article;
