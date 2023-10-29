import React from 'react';
import {View} from 'react-native';
import {useNavigationState} from '@react-navigation/native';

import {styles} from './TabBarItemStyles';
import {colors} from '../../styles/colors';

interface TabBarItemProps {
  icon: (props: any) => Element;
  routeName: string;
  tabName: string;
}

function TabBarItem(props: TabBarItemProps) {
  const screenName = useNavigationState(
    state => state.routes[state.index].name,
  );

  return (
    <View style={styles.TabBarItem}>
      {/*// @ts-ignore*/}
      {props.icon({
        color: screenName === props.routeName ? colors.blue : colors.white,
      })}
    </View>
  );
}

export default TabBarItem;
