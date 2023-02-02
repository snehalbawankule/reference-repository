import { Grid } from "@mui/material";
import { TextWrap04 } from "../add-reaction/reaction.styled";
import { ReplyButton } from "../add-reaction/reply-button";
export const ReplyCard = (props: any) => {
  const { post } = props;
  console.log(post);
  return (
    <Grid container direction="row" style={{ paddingTop: 10 }}>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <TextWrap04
          style={{
            display: "flex",
            justifyContent: "start",
            paddingRight: 15,
          }}
        >
          {post.date}
        </TextWrap04>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TextWrap04>{post.comment}</TextWrap04>
      </Grid>
      <ReplyButton commentId={post.commentId} />
    </Grid>
  );
};
