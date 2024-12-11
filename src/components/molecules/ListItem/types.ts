interface ListItem {
  duration?: string;
  id: string;
  image: string;
  rating: string;
  seasons?: string;
  title: string;
}

interface ListItemProps {
  item: ListItem;
}
