import { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { StarRating } from "star-rating-react-ts";
import {
  ButtonReply,
  PostButton,
  PostReplyButton,
  ReplyInput,
} from "./reaction.styled";

import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";
import { Input } from "./reaction.styled";
export const ReplyButton = (props1: any, props2: any) => {
  const { post } = props1;
  const { commentId } = props2;
  const [inputVisible, setInputVisible] = useState(false);
  const dispatch = useAppDispatch();
  const ReplyTo = commentId;
  console.log(post.comments.commentId);

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
    <div>
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
    </div>
  );
};
