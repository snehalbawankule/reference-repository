import { Button } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Comment } from "./commet";
export const ReactionButtons = (props: any) => {
  const { post } = props;

  //const dispatch = useAppDispatch();
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(false);
  const [comment, setComment] = useState(true);
  /*const handleChange = (event:any) => {
    setComment({event.value});
  };*/

  return (
    <>
      <Grid container>
        <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
          <Button
            type="button"
            className="muted-button reaction-button"
            onClick={() => setLike((prevLike) => !prevLike)}
          >
            Like:{like ? "👍" : "🖒"}
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
          <Button
            type="button"
            className="muted-button reaction-button"
            onClick={() => setHeart((prevHeart) => !prevHeart)}
          >
            heart:{heart ? "❤️" : "🤍"}
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
          <Button
            type="button"
            className="muted-button reaction-button"
            onClick={() => setHeart((prevHeart) => !prevHeart)}
          >
            <Link to={`/editPost/${post.id}`} className="button">
              edit: ✏️
            </Link>
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
          <Button
            type="button"
            className="muted-button reaction-button"
            //onClick={() => setComment((prevComment) => !prevComment)}
          >
            {/*comment:{comment ? "💭" : <Comment />}*/}
            <Comment />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
