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
export type defaultState = {
  article: Article[];
};
export const defaultArticle: Article = {
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
