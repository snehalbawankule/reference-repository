import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { addArticle } from "../../store/services";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
import ArticleCard from "./latest-article-card";
import { LoadMoreButton } from "../article/article.styled";
//import { ReactionButtons } from "../reaction/reaction-button";
const LatestArticles = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const articles = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);
  return (
    <Grid
      container
      sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3, mt: 5 }}
      spacing={5}
    >
      <>
        {articles.article.slice(0, 6).map((post: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              display="flex"
              key={post.id}
            >
              <ArticleCard key={post.id} post={post} />
            </Grid>
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
      </>
    </Grid>
  );
};

export default LatestArticles;
