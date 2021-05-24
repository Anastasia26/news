export interface News {
  ID: any;
  title: string;
  description: string;
  date: any;
  link?: string;
  commentsCount: number;
  viewCount: number
  "tags"?: [
    {
      "title": string;
      "url": string;
      "id": string;
    }
  ],
  image?: string;
  imageSmall?: string;
}
