import React from "react";
import image2 from "../../assets/images/image2.png";
import { Grid, Card, Box } from "@mui/material";

import { TextWrap01, TextWrap02, TextWrap03 } from "./article.styled";
import { ReactionButtons } from "../reaction/reaction-button";

import textwrap from "../textwrap/textwrap.json";
import useMediaQuery from "../../hooks/use-media-query";
import { useNavigate } from "react-router-dom";

const ArticleCard = (props: any) => {
  const { post } = props;
  const { id, completed, title } = post;
  let history = useNavigate();
  const { isMobile } = useMediaQuery();
  return (
    <Grid container>
      {textwrap.map(
        ({ articleTitle, articleDescription, articleDate, latestArticle }) => (
          <>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              display="flex"
              key={post.id}
            >
              <Card
                style={{
                  border: "none",
                  boxShadow: "none",
                  justifyContent: isMobile ? "center" : "flex",
                }}
                onClick={() => history(`/articles/${id}`)}
              >
                <Box>
                  <Box
                    style={{
                      height: "320px",
                      backgroundImage: `url(${image2})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={10}
                    justifyContent="center"
                  >
                    <TextWrap01>{title}</TextWrap01>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    justifyContent="center"
                  >
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
                    <ReactionButtons />
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </>
        )
      )}
    </Grid>
  );
};

export default ArticleCard;
