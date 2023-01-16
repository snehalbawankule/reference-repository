//import { Button } from "@mui/material";
import { useState } from "react";
import { PostButton } from "./reaction.styled";
import { Grid } from "@mui/material";
import { Input } from "../registration/registration.styled";
export const Comment = () => {
  const [comment, setComment] = useState("");
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(comment);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
        <Input
          placeholder="Comment"
          defaultValue={comment}
          onBlurCapture={handleChange}
        />
        <PostButton style={{ marginLeft: 10 }}>Post</PostButton>
      </Grid>
    </form>
  );
};
