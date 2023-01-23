//import { Button } from "@mui/material";
import { useState } from "react";
import { StarRating } from "star-rating-react-ts";
import { PostButton } from "./reaction.styled";
import { Grid } from "@mui/material";
import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";
import { Input } from "./reaction.styled";
export const Comment = (props: any) => {
  const { post } = props;
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState();
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };
  const [exampleOneRating, setExampleOneRating] = useState<number>(0);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(exampleOneRating);
    dispatch(
      actions.addComment({
        id: post,
        comment: comment,
        review: exampleOneRating,
      })
    );
  };

  return (
    <Grid item xs={2} sm={2} md={10} lg={10} display="contents">
      <StarRating
        initialRating={exampleOneRating}
        onClick={(newRating) => setExampleOneRating(newRating)}
        theme={{
          size: 20,
        }}
      />
      <Input
        name="comment"
        placeholder="comment"
        defaultValue={comment}
        onBlurCapture={handleChange}
      />
      <Grid item xs={1} sm={1} md={2} lg={2} display="contents">
        <PostButton onClick={(e) => handleSubmit(e)}>Post</PostButton>
      </Grid>
    </Grid>
  );
};
