import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";

//import { postUpdated, selectPostById } from './postsSlice'

export const Edit = () => {
  // const { postId } = params;

  //const post = useSelector((state) => selectPostById(state, postId));

  //const [title, setTitle] = useState(title);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  //const [content, setContent] = useState(content);

  /*const dispatch = useDispatch();
  const history = useNavigate();

  const onTitleChanged = (e: any) => setTitle(e.target.value);
  const onContentChanged = (e: any) => setContent(e.target.value);*/

  /* const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  };*/

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
        />
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" />
      </form>
      <button type="button">Save Post</button>
    </section>
  );
};
