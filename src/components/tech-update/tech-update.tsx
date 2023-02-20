import React from "react";
import { Grid, Divider } from "@mui/material";
import TechArticleCard from "./tech-article-card";
import { Article } from "../article/article.styled";
import { default as textwrap } from "../../store/textwrap/textwrap.json";
import useMediaQuery from "../../hooks/use-media-query";
const TechUpdate = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  var article = JSON.parse(localStorage.getItem("articles") || "{}");
  const data = article.slice(6, 12);
  return (
    <Grid
      container
      sx={{ px: isDesktop ? 10 : isTablet ? 5 : 3, mb: 3 }}
      spacing={5}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 65 }}>
        <Article style={{ marginTop: 28 }}>{textwrap.techUpdate}</Article>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 28 }}>
        <Divider sx={{ borderBottomWidth: 2 }} />
      </Grid>
      {data &&
        data.map((post: any, index: any) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} display="flex" key={index}>
              <TechArticleCard post={post} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default TechUpdate;
