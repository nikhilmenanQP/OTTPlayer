import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

interface PlayerLoaderProps {
  size?: string;
}

const PlayerLoader: React.FC<PlayerLoaderProps> = ({size = 'small'}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={size} color={theme.colors.bootstrapBlue} />
    </View>
  );
};

export default PlayerLoader;
