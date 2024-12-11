export interface MyListScreenTemplateProps {
  data: Array<{
    id: string;
    title: string;
    image: string;
    rating: string;
    duration?: string;
    seasons?: string;
  }>;
}
