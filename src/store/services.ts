import { createAsyncThunk } from "@reduxjs/toolkit";

import { actions } from "./reducer";

export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (_, { dispatch }) => {
    return fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addArticle(json));
      });
  }
);
export const articleId = createAsyncThunk(
  "article/id",
  async (_, { dispatch }) => {
    return fetch("https://jsonplaceholder.typicode.com/photos/$id")
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addArticle(json));
      });
  }
);
