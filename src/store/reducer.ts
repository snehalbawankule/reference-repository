import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  article: [
    {
      id: "",
      title: "",
      thumbnailUrl: "",
      url: "",
      content: "",
      reactions: {
        like: Number,
        heart: Number,
        comment: Number,
      },
    },
  ],
};

const { actions, reducer } = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle(state, action) {
      state.article = action.payload;
    },
    addNewArticle(state, action) {
      state.article = action.payload;
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.article.find(
        (article) => article.id === postId
      );
      if (existingPost) {
        // existingPost.reactions[reaction]++;
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.article.find((article) => article.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});
export { actions };
export default reducer;
