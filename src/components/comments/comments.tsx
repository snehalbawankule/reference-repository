import { LengthTextWrap } from "../add-reaction/reaction.styled";
import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { CommentCard } from "./comment";
import { CommentsBox } from "./comments.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { Comment } from "./new-commet";
import { Reply } from "../reply/reply";
export const Comments = () => {
  const { isDesktop, isMobile } = useMediaQuery();

  const { id } = useParams<{ id: string }>();
  var existingPost = JSON.parse(localStorage.getItem("articles") || "{}");
  var post = existingPost.find((item: any) => item.id === id);

  const filteredArray = post?.comments?.filter(
    (obj: any) => obj.isReply === false
  );

  return (
    <>
      <Box
        sx={{ flexGrow: 1, display: { xs: "flex", sm: "flex", md: "none" } }}
      >
        <Grid
          container
          direction="row"
          sx={{
            marginTop: isDesktop ? "2px" : isMobile ? "80px" : "5px",
            mx: 5,
          }}
        >
          <CommentsBox>
            {filteredArray?.map((items: any, index: any) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    display="flex"
                    key={index}
                  >
                    <CommentCard post={items} />
                  </Grid>
                  <Reply commentId={items.commentId} />
                </>
              );
            })}
          </CommentsBox>
          <Comment post={post?.id} />
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Grid
          container
          sx={{
            marginTop: isMobile ? "80px" : "30px",
            mx: 5,
          }}
        >
          <Grid item md={12} lg={12}>
            <Comment post={post?.id} />
          </Grid>

          <CommentsBox style={{ marginTop: 20 }}>
            {filteredArray?.map((items: any, index: any) => {
              return (
                <>
                  <Grid item md={12} lg={12} display="flex" key={index}>
                    <CommentCard post={items} />
                  </Grid>
                  <Reply commentId={items.commentId} />
                </>
              );
            })}
          </CommentsBox>
        </Grid>
      </Box>
    </>
  );
};
