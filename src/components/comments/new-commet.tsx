import { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { StarRating } from "star-rating-react-ts";
import { Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "../add-reaction/reaction.styled";
export const Comment = (props: any) => {
  const { post } = props;
  var currentUser = JSON.parse(localStorage.getItem("currentuser") || "{}");

  const [comment, setComment] = useState("");
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };
  const navigate = useNavigate();

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
      userName: currentUser.name,
      userProfile: currentUser.profile,
      isReply: false,
    };

    const existingPost = JSON.parse(localStorage.getItem("articles") || "{}");
    var target = existingPost.find((item: any) => item.id === post);
    const id = target.id;
    if (target) {
      if (target.comments) {
        target.comments.push(newComment);
      } else {
        target.comments = [newComment];
      }
    }
    localStorage.setItem("articles", JSON.stringify(existingPost));
    navigate(`/articles/${id}`);
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

      <Input
        name="comment"
        placeholder="comment"
        defaultValue={comment}
        onBlurCapture={handleChange}
      />

      <Button
        disabled={isTextareaDisabled}
        onClick={(e) => handleSubmit(e)}
        sx={{ pl: 2, color: "#6d6d6d" }}
      >
        <SendIcon />
      </Button>
    </Grid>
  );
};
