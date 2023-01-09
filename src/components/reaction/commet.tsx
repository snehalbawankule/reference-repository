import { Button } from "@mui/material";
import { useState } from "react";
import { Grid, TextField } from "@mui/material";
export const Comment = () => {
  const [comment, setComment] = useState("");
  const handleChange = (event: any) => {
    console.log(event.target.value);
    setComment(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(comment);
    setComment(event.target.value);
  };

  return (
    <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
      <TextField
        fullWidth
        style={{ marginTop: 20 }}
        label="Comment"
        defaultValue={comment}
        onBlurCapture={handleChange}
      />
      <Button onClick={() => handleSubmit}>Post</Button>
    </Grid>
  );
};
