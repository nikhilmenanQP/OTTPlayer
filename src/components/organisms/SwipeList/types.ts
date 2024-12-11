export interface ListItem {
  duration?: string;
  id: string;
  image: string;
  rating: string;
  seasons?: string;
  title: string;
}

export interface MyListScreenProps {
  data: ListItem[];
}
