import { Grid } from "@mui/material";
import { TextWrap04 } from "../add-reaction/reaction.styled";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { ReplyButton } from "../add-reaction/reply-button";
export const Reply = (props: any) => {
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id === id)
  );
  console.log(props.commentId);
  const filteredArray = post?.comments?.filter(
    (obj: any) => obj.replyTo === props.commentId && obj.isReply === true
  );
  console.log(filteredArray);
  return (
    <Grid
      container
      sx={{
        mx: 5,
      }}
    >
      {filteredArray?.map((items: any, index: any) => {
        return (
          <Grid
            container
            direction="row"
            style={{ paddingTop: 10 }}
            key={index}
          >
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <TextWrap04
                style={{
                  display: "flex",
                  justifyContent: "start",
                  paddingRight: 15,
                }}
              >
                {items.date}
              </TextWrap04>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextWrap04>{items.comment}</TextWrap04>
            </Grid>
            <ReplyButton commentId={items.commentId} />
          </Grid>
        );
      })}
    </Grid>
  );
};
