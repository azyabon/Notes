import React from 'react';
import {Pressable, View} from 'react-native';

import {styles} from './MiniButtonStyles';
import {colors} from '../../styles/colors';

interface IProps {
  onPress: () => void;
  icon: React.ReactNode;
  width?: string | number;
  backgroundColor?: string;
}

export default function MiniButton(props: IProps) {
  const {onPress, icon, width = 56, backgroundColor = colors.blue} = props;

  return (
    <Pressable
      onPress={onPress}
      // @ts-ignore
      style={[styles.MiniButton, {width, backgroundColor}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {icon}
      </View>
    </Pressable>
  );
}
