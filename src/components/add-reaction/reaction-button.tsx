import { Button } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import useMediaQuery from "../../hooks/use-media-query";

const ReactionButtons = (props: any) => {
  const { post } = props;
  const [like, setLike] = useState(false);
  const { isMobile, isDesktop } = useMediaQuery();
  return (
    <Grid container flexDirection="row" display="flex">
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <Button
          type="button"
          style={{
            color: "black",
            width: isDesktop ? "131px" : isMobile ? "100px" : "120px",
            fontFamily: "Poppins",
            display: "flex",
            justifyContent: "start",
          }}
          onClick={() => setLike((prevLike) => !prevLike)}
        >
          Like:
          {like ? (
            <ThumbUpIcon
              sx={{ fontSize: isDesktop ? 24 : 20, pl: 1, color: "#1877F2" }}
            />
          ) : (
            <ThumbUpOutlinedIcon
              sx={{ fontSize: isDesktop ? 24 : 20, pl: 1 }}
            />
          )}
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <Button type="button">
          {isMobile ? (
            <Link
              to={`/comments/${post.id}`}
              style={{
                color: "black",
                textDecoration: "none",
                fontFamily: "Poppins",
                display: "flex",
              }}
            >
              Comment
              <ChatBubbleOutlineRoundedIcon
                sx={{ fontSize: isDesktop ? 24 : 20, pl: 1 }}
              />
            </Link>
          ) : (
            <Link
              to={`/articles/${post.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "Poppins",
                display: "flex",
              }}
            >
              Comment
              <ChatBubbleOutlineRoundedIcon
                sx={{ fontSize: isDesktop ? 24 : 20, pl: 1 }}
              />
            </Link>
          )}
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <Button type="button">
          <Link
            to={`/edit/${post.id}`}
            style={{
              color: "black",
              textDecoration: "none",
              fontFamily: "Poppins",
              justifyContent: "end",
              display: "flex",
              marginLeft: isMobile ? "" : "-20px",
              width: isDesktop ? "135px" : isMobile ? "100px" : "120px",
            }}
          >
            Edit: ✏️
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};
export default ReactionButtons;
