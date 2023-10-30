import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ARCHIVE_SCREEN,
  NOTES_SCREEN,
  REMINDERS_SCREEN,
  STATS_SCREEN,
} from '../config/routes';
import NotesScreen from './NotesScreen';
import {colors} from '../styles/colors';
import {getTabItem} from '../utils/getTabBarItem';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ArchiveScreen from './ArchiveScreen';
import NotesIcon from '../icons/NotesIcon';
import ArchiveIcon from '../icons/ArchiveIcon';
import StatsIcon from '../icons/StatsIcon';
import ReminderIcon from '../icons/ReminderIcon';
import StatsScreen from './StatsScreen';
import RemindersScreen from './RemindersScreen';

const Tabs = createBottomTabNavigator();

const TabsNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.dark,
          height: 56 + insets.bottom,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}
      initialRouteName={NOTES_SCREEN}>
      <Tabs.Screen
        name={NOTES_SCREEN}
        component={NotesScreen}
        options={{
          ...getTabItem(NotesIcon, NOTES_SCREEN),
        }}
      />
      <Tabs.Screen
        name={REMINDERS_SCREEN}
        component={RemindersScreen}
        options={{
          ...getTabItem(ReminderIcon, REMINDERS_SCREEN),
        }}
      />
      <Tabs.Screen
        name={STATS_SCREEN}
        component={StatsScreen}
        options={{
          ...getTabItem(StatsIcon, STATS_SCREEN),
        }}
      />
      <Tabs.Screen
        name={ARCHIVE_SCREEN}
        component={ArchiveScreen}
        options={{
          ...getTabItem(ArchiveIcon, ARCHIVE_SCREEN),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;
