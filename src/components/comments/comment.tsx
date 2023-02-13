import { StarRating } from "star-rating-react-ts";
import { TextWrap04 } from "../add-reaction/reaction.styled";
import { Grid, Box } from "@mui/material";
import { ReplyButton } from "../reply/reply-button";

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
          <Box
            style={{
              height: "30px",
              width: "30px",
              backgroundImage: `url(${post?.userProfile})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: 50,
            }}
          />
          <TextWrap04 style={{ paddingTop: 3, paddingLeft: 7 }}>
            <StarRating
              initialRating={post?.rating}
              readOnly
              theme={{
                size: 20,
              }}
            />
          </TextWrap04>

          <TextWrap04 style={{ paddingLeft: 5 }}>{post?.userName}</TextWrap04>

          <TextWrap04 style={{ paddingLeft: 50 }}>{post?.date}</TextWrap04>
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
          display="flex"
          style={{ paddingTop: 10 }}
          key={post?.id}
        >
          <Box
            style={{
              height: "30px",
              width: "30px",
              backgroundImage: `url(${post?.userProfile})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: 50,
            }}
          />
          <TextWrap04 style={{ paddingTop: 3, paddingLeft: 10 }}>
            <StarRating
              initialRating={post?.rating}
              readOnly
              theme={{
                size: 20,
              }}
            />
          </TextWrap04>

          <TextWrap04 style={{ paddingLeft: 10 }}>{post?.userName}</TextWrap04>

          <TextWrap04 style={{ paddingLeft: 10 }}>{post?.date}</TextWrap04>

          <Grid item md={12} lg={12}>
            <TextWrap04>{post?.comment}</TextWrap04>
          </Grid>
          <ReplyButton commentId={post.commentId} />
        </Grid>
      </Box>
    </>
  );
};
