import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './PointStyles';

interface IColumnPointProps {
  title: string;
  children?: React.ReactNode;
  isRow?: boolean;
}

export default function Point(props: IColumnPointProps) {
  return (
    <View
      style={[
        styles.Point,
        props.isRow
          ? {flexDirection: 'row', justifyContent: 'space-between'}
          : null,
      ]}>
      <Text style={styles.Point__title}>{props.title}</Text>
      {props.children}
    </View>
  );
}
