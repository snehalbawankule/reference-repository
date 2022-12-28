import React, { useEffect } from "react";
import { addArticle } from "../../store/services";
import { Grid, Card, Box } from "@mui/material";
import { Image } from "./home.styled";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => state.articles.article);
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);

  return (
    <Grid
      container
      direction="row"
      display="flex"
      sx={{ p: 5, mt: 4 }}
      spacing={5}
    >
      {article &&
        article.map((item: any, index: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              display="flex"
              justifyContent="center"
            >
              <Card style={{ background: "gray" }}>
                <Box sx={{ height: 340 }} key={index}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    display="flex"
                    alignContent="center"
                    style={{ padding: 20 }}
                  >
                    <Image src={item.thumbnailUrl}></Image>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
                    {item.title}
                  </Grid>
                </Box>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Home;
