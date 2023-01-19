export type GlobalState = {
  article: {
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
};
export type Tasks = {
  [key: string]: GlobalState;
};
