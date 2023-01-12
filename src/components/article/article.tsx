import React from "react";
import image from "../../assets/images/image.png";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextWrap02, TextWrap03 } from "./article.styled";
import { useAppSelector } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
const Article = () => {
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id == id)
  );
  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  return (
    <Grid
      container
      display="flex"
      sx={{
        mt: 20,
        px: isDesktop ? 5 : isTablet ? 7 : 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{
          height: isDesktop ? "750px" : isMobile ? "350px" : "600px",
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
        lg={12}
        sx={{ mt: 4 }}
        display="flex"
        justifyContent="center"
      >
        <TextWrap02>{post?.title}</TextWrap02>
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
        <TextWrap02>{post?.description}</TextWrap02>
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
        <TextWrap03>{post?.content}</TextWrap03>
      </Grid>
    </Grid>
  );
};
export default Article;
