import { StarRating } from "star-rating-react-ts";
import { LengthTextWrap, TextWrap04 } from "../add-reaction/reaction.styled";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { CommentsBox } from "./comments.styled";
import { ReplyButton } from "../add-reaction/reply-button";
import { Comment } from "./new-commet";
export const Comments = () => {
  //const { post } = props;
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id === id)
  );

  let length =
    !post?.comments || post?.comments?.length < 1
      ? ""
      : post?.comments?.length + " Comments";

  return (
    <Grid container direction="row" sx={{ marginTop: 10, mx: 5 }}>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <LengthTextWrap>{length}</LengthTextWrap>
      </Grid>
      <CommentsBox>
        {post?.comments?.map((item: any, index: any) => {
          return (
            <Grid
              container
              direction="row"
              style={{ paddingTop: 10 }}
              key={index}
            >
              <Grid item xs={6} sm={6} md={12} lg={12}>
                <StarRating
                  initialRating={item.rating}
                  readOnly
                  theme={{
                    size: 20,
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <TextWrap04
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingRight: 15,
                  }}
                >
                  {item.date}
                </TextWrap04>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextWrap04>{item.comment}</TextWrap04>
              </Grid>
              <ReplyButton post={post} />
            </Grid>
          );
        })}
      </CommentsBox>
      <Comment post={post?.id} />
    </Grid>
  );
};
