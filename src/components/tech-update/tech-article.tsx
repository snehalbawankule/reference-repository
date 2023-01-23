import React from "react";
import { Grid, Card, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  TextWrap02,
  TextWrap03,
} from "../latest-articles/latest-article.styled";
import { useAppSelector } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
const TechArticle = () => {
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id === id)
  );

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
            <TextWrap02>{post?.title}</TextWrap02>
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
            <TextWrap03>{post?.description}</TextWrap03>
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
            <TextWrap03>{post?.content}</TextWrap03>
          </Grid>
        </Box>
      </Card>
    </Grid>
  );
};
export default TechArticle;
