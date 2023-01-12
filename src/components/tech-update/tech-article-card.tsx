import React from "react";
import techupdate from "../../assets/images/techupdate.png";
import { Grid, Card, Box } from "@mui/material";
import { TextWrap02, TextWrap03 } from "../article/article.styled";
import { Link } from "react-router-dom";
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
              backgroundImage: `url(${techupdate})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
            <TextWrap02>{textwrap.articleTitle}</TextWrap02>
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
            <TextWrap03>{textwrap.articleDescription}</TextWrap03>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ mt: isDesktop ? 4 : 3 }}
          >
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
        </Card>
      </Grid>
    </Grid>
  );
};

export default TechArticleCard;
