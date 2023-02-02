/*import { StarRating } from "star-rating-react-ts";
import { LengthTextWrap, TextWrap04 } from "../add-reaction/reaction.styled";
import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

import { CommentsBox } from "./comments.styled";
import { ReplyButton } from "../add-reaction/reply-button";
import useMediaQuery from "../../hooks/use-media-query";
import { Comment } from "./new-commet";
export const Comments = () => {
  const { isDesktop, isMobile } = useMediaQuery();
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id === id)
  );

  let length =
    !post?.comments || post?.comments?.length < 1
      ? ""
      : post?.comments?.length + " Comments";

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Grid
          container
          direction="row"
          sx={{
            marginTop: isDesktop ? "2px" : isMobile ? "80px" : "5px",
            mx: 5,
          }}
        >
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <LengthTextWrap>{length}</LengthTextWrap>
          </Grid>

          <CommentsBox>
            {post?.comments?.map((items: any, index: any) => {
              return (
                <Grid
                  container
                  direction="row"
                  style={{ paddingTop: 10 }}
                  key={index}
                >
                  <Grid item xs={6} sm={6} md={12} lg={12}>
                    <StarRating
                      initialRating={items.rating}
                      readOnly
                      theme={{
                        size: 20,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <TextWrap04
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        paddingRight: 15,
                      }}
                    >
                      {items.date}
                    </TextWrap04>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextWrap04>{items.comment}</TextWrap04>
                  </Grid>
                  <ReplyButton key={index} post={post} />
                </Grid>
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
          <Grid item md={12} lg={12}>
            <LengthTextWrap
              style={{ fontSize: 20, marginTop: 20, marginBottom: 10 }}
            >
              {length}
            </LengthTextWrap>
          </Grid>
          <CommentsBox>
            {post?.comments?.map((items: any, index: any) => {
              return (
                <Grid
                  container
                  direction="row"
                  style={{ paddingTop: 10 }}
                  key={index}
                >
                  <Grid item md={6} lg={6}>
                    <StarRating
                      initialRating={items.rating}
                      readOnly
                      theme={{
                        size: 20,
                      }}
                    />
                  </Grid>
                  <Grid item md={6} lg={6}>
                    <TextWrap04
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        paddingRight: 15,
                      }}
                    >
                      {items.date}
                    </TextWrap04>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextWrap04>{items.comment}</TextWrap04>
                  </Grid>
                  <ReplyButton index={index} />
                </Grid>
              );
            })}
          </CommentsBox>
        </Grid>
      </Box>
    </>
  );
};
*/
