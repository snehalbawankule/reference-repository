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
      console.log(action.payload);
      state.article.push(action.payload);
    },
    postUpdate(state, action) {
      const { id, title, description, content } = action.payload;
      const existingPost = state.article.find((item) => item.id == id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.description = description;
        existingPost.content = content;
      }
    },
  },
});

export { actions };
export default reducer;
