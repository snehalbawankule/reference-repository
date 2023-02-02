import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { ReplyCard } from "./reply-card";
export const Reply = (props: any) => {
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) =>
    state.articles.article.find((item) => item.id === id)
  );

  const filteredArray = post?.comments?.filter(
    (obj: any) => obj.replyTo === props.commentId && obj.isReply === true
  );

  return (
    <Grid
      container
      sx={{
        mx: 5,
      }}
    >
      {filteredArray?.map((items: any, index: any) => {
        return (
          <>
            <Grid item xs={12} sm={12} md={6} lg={6} display="flex" key={index}>
              <ReplyCard post={items} />
            </Grid>
            <Reply commentId={items.commentId} />
          </>
        );
      })}
    </Grid>
  );
};
