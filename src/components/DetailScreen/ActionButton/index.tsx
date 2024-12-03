import {useAppTheme} from '@hooks/useAppTheme';
import {memo, useMemo} from 'react';
import {createStyle} from './styles';
import {Text, TouchableOpacity} from 'react-native';
import {ActionButtonProps} from './types';

export const ActionButton: React.FC<ActionButtonProps> = memo(({icon, label, onPress}) => {
  const {theme} = useAppTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
      {icon}
      <Text style={styles.actionBtnText}>{label}</Text>
    </TouchableOpacity>
  );
});
