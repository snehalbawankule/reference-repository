import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultArticle } from "./types";
const initialState: defaultState = {
  article: [defaultArticle],
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
      const { id, title, description, content, date, edited } = action.payload;
      const existingPost = state.article.find((item) => item.id === id);
      console.log(state);
      if (existingPost) {
        existingPost.title = title;
        existingPost.description = description;
        existingPost.content = content;
        existingPost.date = date;
        existingPost.edited = edited;
      }
    },
    addComment(state, action) {
      const {
        id,
        comment,
        review,
      }: { id: string; comment: string; review: any } = action.payload;
      const existingPost = state.article.find((item) => item.id === id);
      if (existingPost) {
        if (existingPost.comments) {
          //existingPost.comments.comment.push(comment);
          //existingPost.comments.review.push(review);
        } else {
          //existingPost.comments.comment = [comment];
          //existingPost.comments.review = [review];
        }
      }
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.articles.article;
