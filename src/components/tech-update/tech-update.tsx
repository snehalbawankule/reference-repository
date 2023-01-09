import React, { useEffect } from "react";

import { Grid, Divider } from "@mui/material";
import { addArticle } from "../../store/services";
import TechArticleCard from "./tech-article-card";
import { Article } from "../article/article.styled";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import textwrap from "../textwrap/textwrap.json";

import useMediaQuery from "../../hooks/use-media-query";
const TechUpdate = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const articles = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);
  const data = articles.article.slice(6, 12);
  return (
    <Grid container sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3 }} spacing={5}>
      {textwrap.map(({ techUpdate }) => (
        <>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Article>{techUpdate}</Article>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 12 }}>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Grid>
          {data &&
            data.map((post: any) => {
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
                  <TechArticleCard key={post.id} post={post} />
                </Grid>
              );
            })}
        </>
      ))}
    </Grid>
  );
};

export default TechUpdate;
