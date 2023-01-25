import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultArticle, defaultUserData } from "./types";
const initialState: defaultState = {
  userData: [defaultUserData],
  article: [defaultArticle],
};
const { actions, reducer } = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle(state, action) {
      state.article = action.payload;
    },
    userData(state, action) {
      if (state.userData) {
        state.userData.push(action.payload);
      } else {
        state.userData = [action.payload];
      }
    },
    addNewArticle(state, action) {
      const lastId = state.article.slice(-1)[0].id;
      const stringNumber = parseInt(lastId) + 1;
      const numberString = stringNumber.toString();
      action.payload.id = numberString;
      state.article.push(action.payload);
    },
    postUpdate(state, action) {
      const { id, title, description, content, date, edited } = action.payload;
      const existingPost = state.article.find((item) => item.id === id);
      console.log(existingPost);
      if (existingPost) {
        existingPost.title = title;
        existingPost.description = description;
        existingPost.content = content;
        existingPost.date = date;
        existingPost.edited = edited;
      }
    },
    addComment(state, action) {
      const { id } = action.payload;
      console.log(action.payload);
      const existingPost = state.article.find((item) => item.id === id);
      if (existingPost) {
        if (existingPost.comments) {
          existingPost.comments.push(action.payload);
        } else {
          existingPost.comments = [action.payload];
        }
      }
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.articles.article;
