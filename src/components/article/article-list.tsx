import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { addArticle } from "../../store/services";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
import ArticleCard from "./article-card";
const ArticleList = () => {
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
        {articles.article.slice(0, 18).map((post: any) => {
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
              <ArticleCard post={post} />
            </Grid>
          );
        })}
      </>
    </Grid>
  );
};

export default ArticleList;
