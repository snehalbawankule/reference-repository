import { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
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
    const date = moment().format("DD, MMM. yyyy");
    const commentId = uuidv4();
    dispatch(
      actions.addComment({
        id: post,
        commentId: commentId,
        comment: comment,
        review: exampleOneRating,
        date: date,
      })
    );
  };

  return (
    <Grid container display="flex">
      <StarRating
        initialRating={exampleOneRating}
        onClick={(newRating) => setExampleOneRating(newRating)}
        theme={{
          size: 20,
        }}
      />
      <Grid item xs={9} sm={10} md={6} lg={9}>
        <Input
          name="comment"
          placeholder="comment"
          defaultValue={comment}
          onBlurCapture={handleChange}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={2} lg={2} display="contents">
        <PostButton onClick={(e) => handleSubmit(e)}>Post</PostButton>
      </Grid>
    </Grid>
  );
};
