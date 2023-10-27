import React from 'react';
import {Pressable, View} from 'react-native';

import {styles} from './MiniButtonStyles';

interface IProps {
  onPress: () => void;
  icon: React.ReactNode;
}

export default function MiniButton(props: IProps) {
  const {onPress, icon} = props;

  return (
    <Pressable onPress={onPress} style={styles.MiniButton}>
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
