import { createAsyncThunk } from "@reduxjs/toolkit";
//import article from "../components/article";

import { actions } from "./reducer";

export const addArticle = createAsyncThunk(
  "articles/addArticle",
  async (_, { dispatch }) => {
    const newArray = await JSON.parse(localStorage.getItem("articles") || "{}");
    return dispatch(actions.addArticle(newArray));
  }
);
export const userData = createAsyncThunk(
  "articles/userdata",
  async (_, { dispatch }) => {
    const newArray = await JSON.parse(localStorage.getItem("userdata") || "{}");
    return dispatch(actions.addArticle(newArray));
  }
);
