type Comments = {
  review: Array<string>;
  comment: Array<string>;
  date: Array<string>;
};

type Article = {
  id: string;
  title: string;
  thumbnailUrl: string;
  url: string;
  content: string;
  date: string;
  description: string;
  edited: string;
  comments: Comments[];
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
  comments: [],
};
