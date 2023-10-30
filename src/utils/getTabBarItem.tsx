import React from 'react';
import TabBarItem from '../shared/TabBarItem';

export const getTabItem = (
  icon: (props: any) => Element,
  routeName: string,
) => ({
  tabBarIcon: () => <TabBarItem icon={icon} routeName={routeName} />,
});
