import React from "react";
import picture from "../../assets/images/picture.png";
import { Divider, Grid } from "@mui/material";
import textwrap from "../textwrap/textwrap.json";
import { Button, TextWrap04, TextWrap05 } from "./home.styled";
import useMediaQuery from "../../hooks/use-media-query";
import Footer from "../footer/footer";
import LatestArticles from "../article/latest-articles";
import TechUpdate from "../article/tech-update";
const Home = () => {
  const { isMobile, isDesktop } = useMediaQuery();

  return (
    <Grid container display="flex" sx={{ mt: 10 }}>
      {textwrap &&
        textwrap.map(({ homeTitle, homeDescription, readMore }) => (
          <>
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
                <TextWrap04>{homeTitle}</TextWrap04>
              </Grid>
              <Grid
                item
                xs={11}
                sm={10}
                md={7}
                lg={7}
                sx={{ pl: isDesktop ? 10 : 3 }}
              >
                <TextWrap05>{homeDescription}</TextWrap05>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                lg={3}
                sx={{ pl: isDesktop ? 10 : 3, mt: isDesktop ? 10 : 3 }}
              >
                <Button>{readMore}</Button>
              </Grid>
            </Grid>
            <LatestArticles />
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ px: isMobile ? 3 : isDesktop ? 9 : 5 }}
            >
              <Divider sx={{ borderBottomWidth: 2 }} />
            </Grid>
            <TechUpdate />
            <Footer />
          </>
        ))}
    </Grid>
  );
};

export default Home;
