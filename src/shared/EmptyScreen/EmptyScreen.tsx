import React from 'react';
import {Text, View} from 'react-native';
import EmptyIcon from '../../icons/EmptyIcon';

import {styles} from './EmptyScreenStyles';

interface IEmptyScreenProps {
  label?: string;
  isShow: boolean;
}

export default function EmptyScreen(props: IEmptyScreenProps) {
  if (!props.isShow) {
    return null;
  }

  return (
    <View style={styles.EmptyScreen}>
      <EmptyIcon />
      {props.label && (
        <Text style={styles.EmptyScreen__label}>{props.label}</Text>
      )}
    </View>
  );
}
