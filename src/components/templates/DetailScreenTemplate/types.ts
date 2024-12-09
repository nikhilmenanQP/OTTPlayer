export interface ActionButton {
  icon: JSX.Element;
  label: string;
  onPress: () => void;
}

export interface Content {
  contentType?: 'movie' | 'series';
  seasonsData: any[];
  extras: any[];
}

export interface DetailScreenProps {
  actionButtons: ActionButton[];
  onWatchNowHandler: () => void;
  content: Content;
}
