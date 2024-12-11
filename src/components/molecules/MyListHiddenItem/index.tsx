import DeleteIcon from '@assets/images/appIcons/delete.svg';
import PrimaryText from '@components/atoms/PrimaryText';
import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const MyListHiddenItem: React.FC = () => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <View style={styles.hiddenItem}>
      <TouchableOpacity style={styles.deleteButton} activeOpacity={0.7}>
        <DeleteIcon style={styles.deleteIcon} />
        <PrimaryText style={styles.deleteText}>REMOVE</PrimaryText>
      </TouchableOpacity>
    </View>
  );
};

export default memo(MyListHiddenItem);
