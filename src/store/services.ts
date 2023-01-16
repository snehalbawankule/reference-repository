import { createAsyncThunk } from "@reduxjs/toolkit";
//import article from "../components/article";

import { actions } from "./reducer";
export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (_, { dispatch }) => {
    return fetch("https://jsonplaceholder.typicode.com/photos?_limit=30")
      .then((res) => res.json())
      .then((article) => {
        var data = { article };

        var newArray = data.article.filter(function (el: any) {
          return el.id <= 24;
        });
        newArray.forEach((element: any) => {
          element.content =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue pellentesque quis non natoque cursus et venenatis. Sit posuere ut egestas volutpat adipiscing. Elementum ante viverra dolor, a ultrices cursus. Etiam gravida turpis commodo id enim a fringilla facilisis. A elit luctus accumsan habitant sed faucibus egestas faucibus dictum. Convallis viverra dictum non fusce sapien. Donec ut semper dictum mauris. Lobortis amet, senectus interdum hendrerit convallis adipiscing. Nisl ultricies vitae sem sed. Fusce enim velit massa maecenas vestibulum ac non arcu, porttitor.   Tempus vitae quis at convallis magnis nulla pellentesque in eu. Non, proin vestibulum adipiscing ullamcorper diam tristique ultricies. Sodales urna, rutrum justo, fames pellentesque morbi orci, integer. Sit eget lacus at nunc amet, ante. Faucibus ut enim, elementum venenatis penatibus non quam. Nisl, donec purus in cursus ut eget diam proin ac. Nisl sed ultrices dictum urna neque, vitae nisl. Sit amet consequat non purus nulla suspendisse consectetur. Bibendum et mattis turpis ac tincidunt.";
          element.title = "How to build a successfully business in Nigeria";
          element.description =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing";
          element.date = "10-Oct-2022";
        });
        dispatch(actions.addArticle(newArray));
      });
  }
);
