/*import React, { useEffect } from "react";
import image from "../../assets/images/image.png";
import { Grid, Card, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextWrap02, TextWrap03 } from "../article/article.styled";
import textwrap from "../textwrap/textwrap.json";
import { addArticle } from "../../store/services";
import { useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
const TechArticle = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);
  //const article = useAppSelector((state) => state.articles);
  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      display="flex"
      sx={{
        mt: 20,
        px: isDesktop ? 10 : isTablet ? 7 : 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {textwrap.map(({ articleTitle, articleDescription, articleContent }) => (
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
                alignContent: "center",
                height: isMobile ? "300px" : isDesktop ? "1000px" : "616px",
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              key={id}
            />
            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
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
              display="flex"
              justifyContent="center"
            >
              <TextWrap03>{articleContent}</TextWrap03>
            </Grid>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export default TechArticle;
*/
