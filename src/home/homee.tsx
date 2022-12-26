import React, { useState, useEffect } from "react";
import { actions } from "../store/reducer";
import { addArticle } from "../store/services";
import { Grid, Card, CardContent, Typography, CardHeader } from "@mui/material";
import { Boxes, Image } from "./home.styled";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { NewArticle } from "../add-post/add-post.styled";
const Homee = () => {
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => state.articles.article);
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);

  return (
    <Grid container direction="row" spacing={10}>
      {article &&
        article.map((item: any, index: any) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Boxes key={index}>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Image src={item.thumbnailUrl}></Image>
                    <br></br>
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

export default Homee;
