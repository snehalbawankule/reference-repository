import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  article: [
    {
      id: "",
      title: "",
      thumbnailUrl: "",
      url: "",
      content: "",
      description: "",
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
