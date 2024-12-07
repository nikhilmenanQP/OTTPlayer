import ArrowRight from '@assets/images/appIcons/ArrowRight.svg';
import React from 'react';
import {SubscriptionSectionProps} from './types';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const SubscriptionSection: React.FC<SubscriptionSectionProps> = React.memo(
  ({hasActivePlan, onChangePlaneHandler, onSubscribeHandler}) => {
    const {theme} = useAppTheme();
    const styles = createStyle(theme);

    return (
      <View style={styles.accountSection}>
        {hasActivePlan ? (
          <>
            <Text style={[styles.planText, styles.activePlan]}>CURRENT PLAN</Text>
            <Text style={[styles.planText, {color: theme.colors.mediumGray, marginTop: 4}]}>
              Billing on 4th of every month
            </Text>
            <TouchableOpacity style={[styles.buttonContainer]} onPress={onChangePlaneHandler}>
              <Text style={styles.buttonText}>CHANGE PLAN</Text>
              <ArrowRight />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.noActivePlan}>NO ACTIVE PLAN</Text>
            <TouchableOpacity style={[styles.buttonContainer]} onPress={onSubscribeHandler}>
              <Text style={styles.buttonText}>SUBSCRIBE</Text>
              <ArrowRight height={12} style={styles.arrowRightIcon} width={12} />
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  },
);

export default SubscriptionSection;
