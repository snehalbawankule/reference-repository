import { Grid } from "@mui/material";
import { LengthTextWrap } from "../add-reaction/reaction.styled";
export const AllReactions = (props: any) => {
  const { post } = props;
  let length =
    !post?.comments || post?.comments?.length < 1
      ? ""
      : post.comments.length === 1
      ? post?.comments?.length + " Comment"
      : post?.comments?.length + " Comments";
  let average =
    !post?.comments || post?.comments?.length === 0
      ? 0
      : post?.comments.reduce((r: any, c: any) => r + c.rating, 0) /
        post?.comments?.length;
  let average1 =
    !post?.comments || post?.comments?.length === 0
      ? ""
      : "Rating " + average.toFixed(1).replace(/[.,]0$/, "") + "🌟";
  return (
    <>
      <Grid container flexDirection="row" display="flex">
        <Grid item xs={4} sm={4} md={3} lg={3}>
          <LengthTextWrap style={{ paddingTop: 7.5 }}>Likes</LengthTextWrap>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={9}
          lg={9}
          display="flex"
          justifyContent="end"
        >
          <LengthTextWrap style={{ paddingTop: 7.5 }}>{length}</LengthTextWrap>
          <LengthTextWrap style={{ paddingLeft: 7 }}>{average1}</LengthTextWrap>
        </Grid>
      </Grid>
    </>
  );
};
