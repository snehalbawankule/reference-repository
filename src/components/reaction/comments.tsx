import { useState } from "react";
import { TextWrap01, TextWrap02 } from "../article/article.styled";
import { Grid } from "@mui/material";
export const Comments = (props: any) => {
  const { post } = props;
  console.log(post);
  console.log("hello");
  const Comment: any = "Comments";
  const length = () => {
    if (post?.comment?.length > 0) {
      return Comment;
    }
  };
  const [comments, setComments] = useState(length);

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} display="contents">
      <TextWrap02 style={{ fontSize: 16 }}>{comments}</TextWrap02>
      {post?.comment?.map((item: any) => {
        return (
          <TextWrap01 style={{ fontWeight: "bold", paddingLeft: 40 }}>
            {item} <br />
          </TextWrap01>
        );
      })}
    </Grid>
  );
};
