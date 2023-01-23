import { Button } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Comment } from "./commet";
export const ReactionButtons = (props: any) => {
  const { post } = props;
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(false);
  return (
    <>
      <Grid container display="content" flexDirection="row">
        <Grid item xs={3} sm={3} md={3} lg={4} display="contents">
          <Button
            type="button"
            className="muted-button reaction-button"
            onClick={() => setLike((prevLike) => !prevLike)}
          >
            Like:{like ? "👍" : "🖒"}
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={4} display="contents">
          <Button
            type="button"
            onClick={() => setHeart((prevHeart) => !prevHeart)}
          >
            heart:{heart ? "❤️" : "🤍"}
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={4} display="contents">
          <Button type="button">
            <Link to={`/edit/${post.id}`} className="button">
              edit: ✏️
            </Link>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
