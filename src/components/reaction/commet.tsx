//import { Button } from "@mui/material";
import { useState } from "react";
import { PostButton } from "./reaction.styled";
import { Grid } from "@mui/material";
//import { PostButton } from "../new-post/new-post.styled";
import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";
import { Input } from "./reaction.styled";
import { ReadButton } from "../article/article.styled";
export const Comment = (props: any) => {
  const { post } = props;

  const dispatch = useAppDispatch();
  const [comment, setComment] = useState();
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid item xs={2} sm={2} md={10} lg={10} display="contents">
        <Input
          name="comment"
          placeholder="comment"
          defaultValue={comment}
          onBlurCapture={handleChange}
        />
        <Grid item xs={1} sm={1} md={2} lg={2} display="contents">
          <PostButton>Post</PostButton>
        </Grid>
      </Grid>
    </form>
  );
};
