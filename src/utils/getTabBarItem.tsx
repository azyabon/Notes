import React from 'react';
import TabBarItem from '../shared/TabBarItem';

export const getTabItem = (
  icon: (props: any) => Element,
  tabName: string,
  routeName: string,
) => ({
  tabBarIcon: () => (
    <TabBarItem icon={icon} tabName={tabName} routeName={routeName} />
  ),
});
