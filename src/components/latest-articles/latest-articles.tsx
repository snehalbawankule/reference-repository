import React from "react";
import { Grid, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
import ArticleCard from "./latest-article-card";
import { LoadMoreButton, Article } from "../article/article.styled";
import { default as textwrap } from "../textwrap/textwrap.json";
const LatestArticles = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const articles = useAppSelector((state) => state.articles);
  return (
    <Grid container sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Article>{textwrap.latestArticle}</Article>
      </Grid>

      {articles.article.slice(0, 6).map((post: any) => {
        return (
          <>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              display="flex"
              key={post.id}
            >
              <ArticleCard post={post} />
            </Grid>
          </>
        );
      })}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <LoadMoreButton>
          <Link
            to={`/articles`}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Load more articles
          </Link>
        </LoadMoreButton>
      </Grid>
    </Grid>
  );
};

export default LatestArticles;
