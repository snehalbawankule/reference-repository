import { StarRating } from "star-rating-react-ts";
import { TextWrap04 } from "../latest-articles/latest-article.styled";
import { Grid } from "@mui/material";
export const Comments = (props: any) => {
  const { post } = props;
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} display="contents">
      {post?.comments?.slice(0, 2).map((item: any, index: any) => {
        return (
          <Grid
            container
            direction="row"
            style={{ paddingTop: 10 }}
            key={index}
          >
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <StarRating
                initialRating={item.review}
                theme={{
                  size: 20,
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextWrap04>{item.date}</TextWrap04>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextWrap04>{item.comment}</TextWrap04>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
