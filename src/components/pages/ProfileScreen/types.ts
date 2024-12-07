import {StackScreenProps} from '@react-navigation/stack';

export type Tab = 'account' | 'myList';

export type ProfileScreenProps = StackScreenProps<RootStackParamList, 'DetailScreen'>;
