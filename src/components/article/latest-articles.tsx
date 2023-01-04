import React, { useEffect } from "react";
import image from "../../assets/images/image.png";
import { Grid, Card, Box, Divider } from "@mui/material";
import { addArticle } from "../../store/services";
import {
  TextWrap01,
  TextWrap02,
  TextWrap03,
  Article,
} from "../home/home.styled";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
const LatestArticles = () => {
  const { isMobile, isDesktop, isTablet } = useMediaQuery();
  const article = useAppSelector((state) => state.articles.article);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);

  return (
    <Grid container sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Article>Latest Articles</Article>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 12 }}>
        <Divider sx={{ borderBottomWidth: 2 }} />
      </Grid>
      {article &&
        article.map((post: any) => {
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
                      backgroundImage: `url(${image})`,
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
                    <TextWrap01>10 Oct 2022</TextWrap01>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    justifyContent="center"
                  >
                    <TextWrap02>
                      How to build a successfully business in Nigeria
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
                    <TextWrap03>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Iaculis urna imperdiet netus nibh at fermentum mattis.
                      Amet adipiscing
                    </TextWrap03>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default LatestArticles;
