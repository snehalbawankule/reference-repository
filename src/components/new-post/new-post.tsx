import { NewArticle, PostButton } from "./new-post.styled";
import { Grid } from "@mui/material";
import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
import { Input } from "../registration/registration.styled";
import { useState } from "react";
const NewPost = () => {
  const [postInfo, setPostInfo] = useState({
    id: "",
    title: "",
    image: "",
    description: "",
    content: "",
  });
  const handleChange = (event: any) => {
    setPostInfo({ ...postInfo, [event.target.name]: event.target.value });
  };
  const dispatch = useAppDispatch();
  /* useEffect(() => {
    if (articles.article.length < 2) {
      dispatch(addArticle());
    }
  });*/

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      actions.addNewArticle({
        title: postInfo.title,
        image: postInfo.image,
        description: postInfo.description,
        content: postInfo.content,
      })
    );
    //navigate("/home");
  };

  const { isDesktop, isTablet } = useMediaQuery();

  return (
    <Grid
      container
      sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3, mt: 5 }}
      spacing={5}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <NewArticle>Post a new article</NewArticle>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <Input
          style={{ width: "800px" }}
          type="text"
          name="title"
          onBlur={handleChange}
          defaultValue={postInfo.title}
          placeholder="Article title"
          required
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <Input
          style={{ width: "800px" }}
          type="text"
          name="image"
          onBlur={handleChange}
          defaultValue={postInfo.image}
          placeholder="image url"
          required
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <Input
          style={{ width: "800px" }}
          type="text"
          name="description"
          onBlur={handleChange}
          defaultValue={postInfo.description}
          placeholder="Article description"
          required
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <Input
          style={{ width: "800px" }}
          type="text"
          name="content"
          onBlur={handleChange}
          defaultValue={postInfo.content}
          placeholder="Article content"
          required
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <PostButton onClick={(e) => handleSubmit(e)}>Post</PostButton>
      </Grid>
    </Grid>
  );
};
export default NewPost;
