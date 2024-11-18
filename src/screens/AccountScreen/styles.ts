import {Theme} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    // Button Section
    arrowRightIcon: {
      marginRight: 8,
    },
    buttonContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
    },
    buttonText: {
      backgroundColor: '#383e44',
      borderRadius: 5,
      color: 'white',
      paddingHorizontal: 46,
      paddingVertical: 10,
    },

    // Account Section
    accountSection: {
      backgroundColor: '#262c34',
      borderRadius: 6,
      marginVertical: 12,
      padding: 15,
    },

    // Info Section
    infoRow: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoText: {
      color: '#fff',
      marginBottom: 2,
    },

    // Text styles
    changePasswordText: {
      color: '#fff',
    },
    editButton: {
      color: '#fff',
      textDecorationLine: 'underline',
    },
    planText: {
      fontSize: 12,
      letterSpacing: 0.5,
    },
    activePlan: {
      color: '#34C759',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
    },
    noActivePlan: {
      color: '#FF3B30',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
    },

    // Miscellaneous
    container: {
      flex: 1,
      padding: 14,
    },
    horizontalRule: {
      height: 0.2,
      marginVertical: 10,
    },
  });
