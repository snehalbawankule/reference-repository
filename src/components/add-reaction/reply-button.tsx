import { useState } from "react";
import moment from "moment";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ButtonReply, ReplyInput } from "./reaction.styled";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import { actions } from "../../store/reducer";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const ReplyButton = (props: any) => {
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id === id)
  );

  const ReplyTo = props.commentId;
  const [inputVisible, setInputVisible] = useState(false);
  const dispatch = useAppDispatch();

  const [comment, setComment] = useState();
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const date = moment().format("DD, MMM. yyyy");
    const commentId = uuidv4();
    const newComment = {
      id: post?.id,
      commentId: commentId,
      comment: comment,
      date: date,
      isReply: true,
      replyTo: ReplyTo,
    };
    dispatch(
      actions.addComment({
        id: post,
        commentId: commentId,
        comment: comment,
        date: date,
        isReply: true,
        replyTo: ReplyTo,
      })
    );
    const existingPost = JSON.parse(localStorage.getItem("articles") || "{}");
    var target = existingPost.find((item: any) => item.id === post?.id);
    console.log(target.comments);
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
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex"></Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <ButtonReply onClick={() => setInputVisible(!inputVisible)}>
          Reply
        </ButtonReply>
        {inputVisible ? (
          <>
            <Grid item xs={10} sm={12} md={12} lg={5} display="flex">
              <ReplyInput
                type="text"
                placeholder="Type here..."
                defaultValue={comment}
                onBlurCapture={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={12} md={12} lg={12} display="flex">
              <SendIcon
                onClick={(e) => handleSubmit(e)}
                sx={{ color: "#6d6d6d" }}
              />
            </Grid>
          </>
        ) : null}
      </Grid>
    </Grid>
  );
};
