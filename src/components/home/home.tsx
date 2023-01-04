import React, { useEffect } from "react";
import image from "../../assets/images/image.png";
import picture from "../../assets/images/picture.png";
import { addArticle } from "../../store/services";
import { Grid, Card, Box } from "@mui/material";
import {
  Image,
  Button,
  TextWrap01,
  TextWrap02,
  TextWrap03,
  TextWrap04,
  TextWrap05,
  LatestArticle,
} from "./home.styled";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
import Footer from "../footer/footer";
const Home = () => {
  const { isMobile, isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => state.articles.article);

  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);

  return (
    <Grid container display="flex" sx={{ mt: 10 }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{
          height: isDesktop ? "750px" : isMobile ? "350px" : "600px",
          display: "flex-column",
          backgroundImage: `url(${picture})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={10}
          sm={12}
          md={7}
          lg={6}
          sx={{ pl: isDesktop ? 10 : 3, mt: isDesktop ? 20 : 10 }}
        >
          <TextWrap04>Prepare for the Future</TextWrap04>
        </Grid>
        <Grid
          item
          xs={11}
          sm={10}
          md={7}
          lg={7}
          sx={{ pl: isDesktop ? 10 : 3 }}
        >
          <TextWrap05>
            Learning a new skill is important and here at skillup africa we help
            train student in various digital skills
          </TextWrap05>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          sx={{ pl: isDesktop ? 10 : 3, mt: isDesktop ? 10 : 3 }}
        >
          <Button>Read More</Button>
        </Grid>
      </Grid>
      <Grid container sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3 }} spacing={5}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <LatestArticle>Latest Articles</LatestArticle>
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
      <Footer />
    </Grid>
  );
};

export default Home;
