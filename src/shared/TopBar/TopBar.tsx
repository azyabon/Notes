import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../icons/BackIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './TopBarStyles';

interface ITopBarProps {
  isBack?: boolean;
  title: string;
}

export default function TopBar(props: ITopBarProps) {
  const {goBack} = useNavigation();
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <View style={[styles.TopBar, {paddingTop: statusBarHeight + 16}]}>
      {props.isBack ? (
        <Pressable onPress={goBack}>
          <BackIcon />
        </Pressable>
      ) : null}
      <Text style={styles.TopBar__title}>{props.title}</Text>
      <View style={{width: props.isBack ? 20 : 1}} />
    </View>
  );
}
