import { createAsyncThunk } from "@reduxjs/toolkit";
//import article from "../components/article";

import { actions } from "./reducer";
export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (_, { dispatch }) => {
    const newArray = JSON.parse(localStorage.getItem("articles") || "{}");
    return dispatch(actions.addArticle(newArray));
  }
);
