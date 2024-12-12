import React from 'react';

import {AccountInfoSectionProps} from './types';
import {HorizontalRule} from '@components/atoms';
import {View, Text, TouchableOpacity} from 'react-native';

import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const AccountInfoSection: React.FC<AccountInfoSectionProps> = React.memo(({onEditMailHandler}) => {
  const {theme} = useAppTheme();
  const styles = createStyle(theme);

  return (
    <View style={styles.accountSection}>
      <View style={styles.infoRow}>
        <View>
          <Text style={styles.infoText}>SMITH</Text>
          <Text style={styles.infoText}>Johndoe@email.com</Text>
        </View>
        <TouchableOpacity onPress={onEditMailHandler}>
          <Text style={styles.editButton}>EDIT</Text>
        </TouchableOpacity>
      </View>
      <HorizontalRule style={styles.horizontalRule} />
      <TouchableOpacity>
        <Text style={styles.changePasswordText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
});

export default AccountInfoSection;
