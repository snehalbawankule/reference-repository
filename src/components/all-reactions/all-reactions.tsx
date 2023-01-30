import { useState } from "react";
import { Grid } from "@mui/material";
import { LengthTextWrap } from "../add-reaction/reaction.styled";
export const AllReactions = (props: any) => {
  const { post } = props;
  const [like, setLike] = useState(false);
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
        <Grid item xs={6} sm={3} md={3} lg={3} display="contents">
          <LengthTextWrap style={{ display: "flex", justifyContent: "end" }}>
            Likes
          </LengthTextWrap>
        </Grid>
        <Grid item xs={4} sm={3} md={3} lg={3}>
          <LengthTextWrap style={{ display: "flex", justifyContent: "end" }}>
            {length}
          </LengthTextWrap>
        </Grid>

        <Grid item xs={4} sm={3} md={3} lg={5}>
          <LengthTextWrap style={{ display: "flex", justifyContent: "end" }}>
            {average1}
          </LengthTextWrap>
        </Grid>
      </Grid>
    </>
  );
};
