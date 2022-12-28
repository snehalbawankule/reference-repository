import React, { useEffect } from "react";
import { addArticle } from "../../store/services";
import { Grid, Card } from "@mui/material";
import { Boxes, Image } from "./home.styled";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => state.articles.article);
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);

  return (
    <Grid container direction="row" display="flex" spacing={5}>
      {article &&
        article.map((item: any, index: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={3}
              display="flex"
              justifyContent="center"
            >
              <Card style={{ background: "gray", paddingLeft: 10 }}>
                <Boxes key={index}>
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
                </Boxes>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Home;
