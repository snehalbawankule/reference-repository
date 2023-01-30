import { Button } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
export const ReactionButtons = (props: any) => {
  const { post } = props;
  const [like, setLike] = useState(false);
  return (
    <Grid container flexDirection="row" display="flex">
      <Grid item xs={4} sm={4} md={4} lg={4} display="contents">
        <Button
          type="button"
          style={{
            color: "black",
            fontFamily: "Poppins",
          }}
          onClick={() => setLike((prevLike) => !prevLike)}
        >
          Like:{like ? "👍" : "🖒"}
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} display="contents">
        <Button type="button">
          <Link
            to={`/comments/${post.id}`}
            style={{
              color: "black",
              textDecoration: "none",
              fontFamily: "Poppins",
            }}
          >
            Comment
          </Link>
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} display="contents">
        <Button type="button">
          <Link
            to={`/edit/${post.id}`}
            style={{
              color: "black",
              textDecoration: "none",
              fontFamily: "Poppins",
            }}
          >
            Edit: ✏️
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};
