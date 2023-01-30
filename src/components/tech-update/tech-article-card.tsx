import React from "react";
import { Grid, Card, Box } from "@mui/material";
import { TextWrap02, TextWrap03 } from "../article/article.styled";
import { Link } from "react-router-dom";
import { ReactionButtons } from "../add-reaction/add-reaction-button";
import { ReadButton } from "../article/article.styled";
import { default as textwrap } from "../textwrap/textwrap.json";
import useMediaQuery from "../../hooks/use-media-query";
const TechArticleCard = (props: any) => {
  const { post } = props;
  const { id } = post;
  const { isMobile, isDesktop } = useMediaQuery();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={post.id}>
        <Card
          style={{
            border: "none",
            boxShadow: "none",
            justifyContent: isMobile ? "center" : "flex",
          }}
        >
          <Box
            style={{
              height: "320px",
              backgroundImage: `url(${post.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
            <TextWrap02
              style={{
                height: 80,
              }}
            >
              {post.title}
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
            <TextWrap03>{post.description}</TextWrap03>
          </Grid>

          <Grid container sx={{ mt: isDesktop ? 4 : 3 }}>
            <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
              <ReadButton>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to={`/tech-article/${id}`}
                >
                  {textwrap.readMore}
                </Link>
              </ReadButton>
            </Grid>
            <Grid item xs={9} sm={9} md={9} lg={9}>
              <ReactionButtons style={{ paddingLeft: 20 }} post={post} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TechArticleCard;
