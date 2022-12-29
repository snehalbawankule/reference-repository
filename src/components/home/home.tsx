import React, { useEffect } from "react";
import image from "../../assets/images/image.png";
import picture from "../../assets/images/picture.png";
import { addArticle } from "../../store/services";
import { Grid, Card, Box } from "@mui/material";
import {
  Image,
  TextWrap01,
  TextWrap02,
  TextWrap03,
  TextWrap04,
  TextWrap05,
} from "./home.styled";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
const Home = () => {
  const { isTablet, isMobile, isDesktop } = useMediaQuery();
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
      sx={{ p: 3, mt: 4 }}
      spacing={5}
    >
      {/*<Grid
        item
        sx={{ mt: 4 }}
        xs={100}
        sm={100}
        md={50}
        lg={12}
        style={{
          height: 750,
          alignContent: "center",
          backgroundImage: `url(${picture})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <TextWrap04>Prepare for the Future</TextWrap04>
        <TextWrap05>
          Learning a new skill is important and here at skillup africa we help
          train student in various digital skills
        </TextWrap05>
      </Grid>*/}
      {article &&
        article.map((post: any) => {
          return (
            <Grid item xs={132} sm={6} md={4} lg={3} display="flex">
              <Card
                style={{
                  border: "none",
                  boxShadow: "none",
                  justifyContent: isMobile ? "center" : "flex",
                }}
              >
                <Box key={post.id}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    display="flex"
                    justifyContent="center"
                  >
                    <Image src={image}></Image>
                  </Grid>
                  <TextWrap01>10 Oct 2022</TextWrap01>
                  <TextWrap02>
                    How to build a successfully business in Nigeria
                  </TextWrap02>

                  <TextWrap03>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Iaculis urna imperdiet netus nibh at fermentum mattis. Amet
                    adipiscing
                  </TextWrap03>
                </Box>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Home;
