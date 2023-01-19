import React from "react";
import image2 from "../../assets/images/image2.png";
import { Grid, Card, Box } from "@mui/material";

import { TextWrap01, TextWrap02, TextWrap03 } from "./article.styled";
import { ReactionButtons } from "../reaction/reaction-button";
import useMediaQuery from "../../hooks/use-media-query";
import { useNavigate } from "react-router-dom";

const ArticleCard = (props: any) => {
  const { post } = props;
  const { id } = post;
  let history = useNavigate();
  const { isMobile } = useMediaQuery();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
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
                height: "320px",
                backgroundImage: `url(${post.url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => history(`/articles/${id}`)}
            />

            <Grid container direction="row">
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <TextWrap01>{post.date}</TextWrap01>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <TextWrap01>{post.edited}</TextWrap01>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={10} justifyContent="center">
              <TextWrap02>{post.title}</TextWrap02>
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
              <TextWrap03>{post.description}</TextWrap03>
            </Grid>
          </Box>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            display="flex"
            justifyContent="center"
          >
            <ReactionButtons post={post} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ArticleCard;