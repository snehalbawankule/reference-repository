import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  article: [
    {
      id: "",
      title: "",
      thumbnailUrl: "",
      url: "",
      reactions: [],
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
        existingPost.reactions[reaction]++;
      }
    },
  },
});
export { actions };
export default reducer;
