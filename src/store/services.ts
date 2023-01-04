import { createAsyncThunk } from "@reduxjs/toolkit";

import { actions } from "./reducer";

export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (_, { dispatch }) => {
    return fetch("https://jsonplaceholder.typicode.com/photos/?_limit=6")
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addArticle(json));
      });
  }
);
