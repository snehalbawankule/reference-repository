import { createSlice } from "@reduxjs/toolkit";
//import { GlobalState } from "./types";

type Article = {
  id: string;
  title: string;
  thumbnailUrl: string;
  url: string;
  content: string;
  date: string;
  description: string;
  edited: string;
  comment: Array<string>;
};
type defaultState = {
  article: Article[];
};
const defaultArticle: Article = {
  id: "",
  title: "",
  thumbnailUrl: "",
  url: "",
  content: "",
  date: "",
  description: "",
  edited: "",
  comment: [],
};

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
      const { id, comment }: { id: string; comment: string } = action.payload;
      const existingPost = state.article.find((item) => item.id === id);
      if (existingPost) {
        if (existingPost.comment) {
          existingPost.comment.push(comment);
        } else {
          existingPost.comment = [comment];
        }
      }
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.articles.article;
