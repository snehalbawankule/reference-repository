import { createSelector } from "reselect";

const globalState = (state: any) => state.global;

//Global Selector
const getArticle = createSelector(globalState, (global) => console.log(global));

export { getArticle };
