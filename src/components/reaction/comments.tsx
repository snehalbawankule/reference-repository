import { StarRating } from "star-rating-react-ts";
import { LengthTextWrap, TextWrap04 } from "./reaction.styled";
import { Grid } from "@mui/material";
import { ReplyButton } from "./reply-button";
export const Comments = (props: any) => {
  const { post } = props;
  let length =
    !post?.comments || post?.comments?.length === 0
      ? ""
      : post?.comments?.length + " Comments";

  return (
    <Grid container direction="row">
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <LengthTextWrap style={{ marginTop: 10 }}>{length}</LengthTextWrap>
      </Grid>

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
              <TextWrap04 style={{ display: "flex", justifyContent: "end" }}>
                {item.date}
              </TextWrap04>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextWrap04>{item.comment}</TextWrap04>
            </Grid>
            <ReplyButton post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};
