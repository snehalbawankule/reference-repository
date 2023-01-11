import { createAsyncThunk } from "@reduxjs/toolkit";
//import article from "../components/article";

import { actions } from "./reducer";
export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (_, { dispatch }) => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((article) => {
        var data = { article };

        var newArray = data.article.filter(function (el: any) {
          return el.id <= 24;
        });
        newArray.forEach((element: any) => {
          element.title = "How to build a successfully business in Nigeria";
          element.description =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing";
        });
        dispatch(actions.addArticle(newArray));
      });
  }
);
