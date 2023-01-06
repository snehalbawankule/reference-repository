import React, { useEffect } from "react";
import techupdate from "../../assets/images/techupdate.png";
import { Grid, Card, Box, Divider } from "@mui/material";
import { addArticle } from "../../store/services";
import {
  TextWrap02,
  TextWrap03,
  Article,
  ReadButton,
} from "../article/article.styled";
import { LoadMoreButton } from "../article/article.styled";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import textwrap from "../textwrap/textwrap.json";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
const ArticleUpdate = () => {
  const { isMobile, isDesktop, isTablet } = useMediaQuery();
  const articles = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);
  const data = articles.article.slice(0, 6);
  return (
    <Grid container sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3 }} spacing={5}>
      {textwrap.map(
        ({
          articleTitle,
          articleDescription,
          techUpdate,
          loadMoreArticles,
          readMore,
        }) => (
          <>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Article>{techUpdate}</Article>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ paddingTop: 12 }}
            >
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
                            backgroundImage: `url(${techupdate})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        />
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
                          sx={{ mt: isDesktop ? 4 : 3 }}
                        >
                          <ReadButton>
                            <Link
                              style={{
                                color: "white",
                                textDecoration: "none",
                              }}
                              to={`/article`}
                            >
                              {readMore}
                            </Link>
                          </ReadButton>
                        </Grid>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
          </>
        )
      )}
    </Grid>
  );
};

export default ArticleUpdate;
