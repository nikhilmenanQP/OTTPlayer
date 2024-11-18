export type Tab = 'account' | 'myList';

export interface TabNavigatorProps {
  tab: Tab;
  setTab: (tab: Tab) => void;
}
