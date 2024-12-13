import styled from '@emotion/native';

export const Container = styled.TouchableOpacity(({theme}: any) => ({
  alignItems: 'center',
  borderColor: theme.colors.musselBlue,
  borderRadius: theme.spacing.lg_llll,
  borderWidth: theme.spacing.sm_xxxx,
  height: theme.spacing.md_llll,
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'absolute',
  right: theme.spacing.null,
  width: theme.spacing.md_llll,
}));

export const ProfileImage = styled.Image(({theme}: any) => ({
  borderRadius: theme.spacing.lg_llll,
}));
