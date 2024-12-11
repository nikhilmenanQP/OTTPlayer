export type Tab = 'account' | 'myList';

export interface ProfileScreenContentProps {
  tab: Tab;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}
