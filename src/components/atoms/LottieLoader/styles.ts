import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View(({theme}) => ({
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
}));
