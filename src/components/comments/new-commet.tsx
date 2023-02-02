import { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { StarRating } from "star-rating-react-ts";
import { Button, Grid } from "@mui/material";
import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "../add-reaction/reaction.styled";
export const Comment = (props: any) => {
  const { post } = props;

  const dispatch = useAppDispatch();

  const [comment, setComment] = useState("");
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };
  const isTextareaDisabled = comment?.length === 0;
  const [exampleOneRating, setExampleOneRating] = useState<number>(0);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const date = moment().format("DD, MMM. yyyy");
    const commentId = uuidv4();
    const newComment = {
      id: post,
      commentId: commentId,
      comment: comment,
      rating: exampleOneRating,
      date: date,
      isReply: false,
    };
    dispatch(
      actions.addComment({
        id: post,
        commentId: commentId,
        comment: comment,
        rating: exampleOneRating,
        date: date,
        isReply: false,
      })
    );

    const existingPost = JSON.parse(localStorage.getItem("articles") || "{}");
    var target = existingPost.find((item: any) => item.id === post);
    if (target) {
      if (target.comments) {
        target.comments.push(newComment);
      } else {
        target.comments = [newComment];
      }
    }
    localStorage.setItem("articles", JSON.stringify(existingPost));
  };

  return (
    <Grid container display="flex">
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <StarRating
          initialRating={exampleOneRating}
          onClick={(newRating) => setExampleOneRating(newRating)}
          theme={{
            size: 20,
          }}
        />
      </Grid>
      <Grid item xs={10} sm={10} md={10} lg={7}>
        <Input
          name="comment"
          placeholder="comment"
          defaultValue={comment}
          onBlurCapture={handleChange}
        />
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2}>
        <Button
          disabled={isTextareaDisabled}
          onClick={(e) => handleSubmit(e)}
          sx={{ pl: 2, color: "#6d6d6d" }}
        >
          <SendIcon />
        </Button>
      </Grid>
    </Grid>
  );
};
