export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
};
