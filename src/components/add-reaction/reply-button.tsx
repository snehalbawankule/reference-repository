import { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { ButtonReply, PostReplyButton, ReplyInput } from "./reaction.styled";

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
    <>
      <ButtonReply onClick={() => setInputVisible(!inputVisible)}>
        Reply
      </ButtonReply>
      {inputVisible ? (
        <>
          <ReplyInput
            type="text"
            placeholder="Type here..."
            defaultValue={comment}
            onBlurCapture={handleChange}
          />
          <PostReplyButton onClick={(e) => handleSubmit(e)}>
            Post
          </PostReplyButton>
        </>
      ) : null}
    </>
  );
};
