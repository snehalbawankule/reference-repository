import { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { StarRating } from "star-rating-react-ts";
import { Grid } from "@mui/material";
import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "../add-reaction/reaction.styled";
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
        rating: exampleOneRating,
        date: date,
      })
    );
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
        <SendIcon
          onClick={(e) => handleSubmit(e)}
          sx={{ pl: 2, color: "#6d6d6d" }}
        />
      </Grid>
    </Grid>
  );
};
