import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { CommentCard } from "./comment";
import { CommentsBox } from "./comments.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { Comment } from "./new-commet";
import { Reply } from "../reply/reply";
export const Comments = () => {
  const { isDesktop, isMobile, isTablet } = useMediaQuery();

  const { id } = useParams<{ id: string }>();
  var existingPost = JSON.parse(localStorage.getItem("articles") || "{}");
  var post = existingPost.find((item: any) => item.id === id);

  const filteredArray = post?.comments?.filter(
    (obj: any) => obj.isReply === false
  );

  return (
    <>
      {" "}
      <Grid container display="flex" justifyContent="center">
        <Box
          sx={{
            flexGrow: 1,
            display: isDesktop ? "flex" : isTablet ? "flex" : "none",
          }}
        >
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
          </Grid>
        </Box>
        <CommentsBox
          style={{
            marginTop: isDesktop ? "20px" : isMobile ? "90px" : "30px",
          }}
        >
          {filteredArray?.map((items: any, index: any) => {
            return (
              <>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
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
        <Box sx={{ flexGrow: 1, display: isMobile ? "flex" : "none" }}>
          <Grid
            container
            direction="row"
            sx={{
              marginTop: isDesktop ? "2px" : isMobile ? "80px" : "5px",
              mx: 5,
            }}
          >
            <Comment post={post?.id} />
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
