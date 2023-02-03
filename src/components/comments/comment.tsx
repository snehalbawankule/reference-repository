import { StarRating } from "star-rating-react-ts";
import { TextWrap04 } from "../add-reaction/reaction.styled";
import { Grid, Box } from "@mui/material";
import { ReplyButton } from "../add-reaction/reply-button";

export const CommentCard = (props1: any) => {
  const { post } = props1;

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Grid
          container
          direction="row"
          style={{ paddingTop: 10 }}
          key={post?.id}
        >
          <Grid item xs={4} sm={4}>
            <StarRating
              initialRating={post?.rating}
              readOnly
              theme={{
                size: 20,
              }}
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextWrap04
              style={{
                display: "flex",
                paddingRight: 15,
              }}
            >
              {post?.userName}
            </TextWrap04>
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextWrap04
              style={{
                display: "flex",
                justifyContent: "end",
                paddingRight: 15,
              }}
            >
              {post?.date}
            </TextWrap04>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextWrap04>{post?.comment}</TextWrap04>
          </Grid>
          <ReplyButton commentId={post.commentId} />
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Grid
          container
          direction="row"
          style={{ paddingTop: 10 }}
          key={post?.id}
        >
          <Grid item md={4} lg={3}>
            <StarRating
              initialRating={post?.rating}
              readOnly
              theme={{
                size: 20,
              }}
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextWrap04
              style={{
                display: "flex",
                paddingRight: 15,
              }}
            >
              {post?.userName}
            </TextWrap04>
          </Grid>
          <Grid item md={4} lg={4}>
            <TextWrap04
              style={{
                display: "flex",
                justifyContent: "end",
                paddingRight: 15,
              }}
            >
              {post?.date}
            </TextWrap04>
          </Grid>
          <Grid item md={12} lg={12}>
            <TextWrap04>{post?.comment}</TextWrap04>
          </Grid>
          <ReplyButton commentId={post.commentId} />
        </Grid>
      </Box>
    </>
  );
};
