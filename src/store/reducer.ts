import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  article: [
    {
      id: "",
      title: "",
      thumbnailUrl: "",
      url: "",
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
  },
});
export { actions };
export default reducer;
