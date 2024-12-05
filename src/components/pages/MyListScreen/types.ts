// Define the data type for the list items
export interface ListItem {
  duration?: string;
  id: string;
  image: string;
  rating: string;
  seasons?: string;
  title: string;
}

// Define the props for MyListScreen
export interface MyListScreenProps {
  data: ListItem[]; // Expecting an array of ListItem
}
