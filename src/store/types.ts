export type Article = {
  id: string;
  title: string;
  thumbnailUrl: string;
  url: string;
  content: string;
  date: string;
  description: string;
  edited: string;
  comments: [
    {
      commentId: string;
      userName: string;
      review: string;
      comment: string;
      date: string;
      isReply: boolean;
      replyTo: string;
    }
  ];
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
  comments: [
    {
      commentId: "",
      userName: "",
      review: "",
      comment: "",
      date: "",
      isReply: false,
      replyTo: "",
    },
  ],
};
