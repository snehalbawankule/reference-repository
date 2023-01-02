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
  const { isMobile, isDesktop } = useMediaQuery();
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => state.articles.article);
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);

  return (
    <Grid container display="flex">
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ mt: 10, textAlign: "center" }}
        style={{
          height: isDesktop ? "46.87rem" : "",
          display: "flex-column",
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
      </Grid>
      {article &&
        article.map((post: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ p: 3, mt: 4 }}
              spacing={5}
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
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={100}
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
