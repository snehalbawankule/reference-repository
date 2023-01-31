import { useState } from "react";
import moment from "moment";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ButtonReply, ReplyInput } from "./reaction.styled";
import SendIcon from "@mui/icons-material/Send";
import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";
export const ReplyButton = (props: any) => {
  const { post } = props;
  const [inputVisible, setInputVisible] = useState(false);
  const dispatch = useAppDispatch();
  const ReplyTo = post?.comments?.commentId;
  const [comment, setComment] = useState();
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const date = moment().format("DD, MMM. yyyy");
    const commentId = uuidv4();
    dispatch(
      actions.addComment({
        id: post.id,
        commentId: commentId,
        comment: comment,
        replyTo: ReplyTo,
        date: date,
      })
    );
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <ButtonReply onClick={() => setInputVisible(!inputVisible)}>
          Reply
        </ButtonReply>
        {inputVisible ? (
          <>
            <Grid item xs={10} sm={12} md={12} lg={12} display="flex">
              <ReplyInput
                type="text"
                placeholder="Type here..."
                defaultValue={comment}
                onBlurCapture={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={12} md={12} lg={12} display="flex">
              <SendIcon onClick={(e) => handleSubmit(e)} />
            </Grid>
          </>
        ) : null}
      </Grid>
    </Grid>
  );
};
