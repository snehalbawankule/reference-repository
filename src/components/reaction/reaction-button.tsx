import { Button } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { useAppDispatch } from "../../hooks/hooks";
const reactionEmoji = {
  Like: "👍",
  heart: "❤️",
  comment: "💬",
  edit: "✏️",
};

export const ReactionButtons = (props: any) => {
  const { post } = props;
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
        <Button
          key={name}
          type="button"
          className="muted-button reaction-button"
        >
          {emoji} {name}
        </Button>
      </Grid>
    );
  });

  return <div>{reactionButtons}</div>;
};
