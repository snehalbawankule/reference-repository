//import { Button } from "@mui/material";
import { useState } from "react";
import { PostButton } from "./reaction.styled";
import { Grid } from "@mui/material";
import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";
import { Input } from "./reaction.styled";
export const Comment = (props: any) => {
  const { post } = props;

  const dispatch = useAppDispatch();
  const [comment, setComment] = useState(post?.comment);
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      actions.addComment({
        id: post,
        comment: comment,
      })
    );
  };

  return (
    <Grid item xs={3} sm={3} md={12} lg={12} display="contents">
      <Input
        name="comment"
        placeholder="comment"
        defaultValue={comment}
        onBlurCapture={handleChange}
      />

      <PostButton onClick={handleSubmit} style={{ marginLeft: 10 }}>
        Post
      </PostButton>
    </Grid>
  );
};
