import React from 'react';
import {NOTE_SCREEN, TABS_SCREEN} from '../config/routes';
import NoteScreen from './NoteScreen';
import TabsNavigation from './AppTabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={TABS_SCREEN}>
      <Stack.Screen name={TABS_SCREEN} component={TabsNavigation} />
      <Stack.Screen name={NOTE_SCREEN} component={NoteScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
