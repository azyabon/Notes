import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './StatusStyles';

interface IStatusProps {
  label: string;
  color: string;
}

export default function Status(props: IStatusProps) {
  return (
    <View style={[styles.Status, {borderColor: props.color}]}>
      <Text style={[styles.Status__text, {color: props.color}]}>
        {props.label}
      </Text>
    </View>
  );
}
