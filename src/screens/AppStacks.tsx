import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NOTE_SCREEN, NOTES_SCREEN} from '../config/routes';
import NotesScreen from './NotesScreen';
import NoteScreen from './NoteScreen';

export default function AppStacks() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NOTES_SCREEN}
          component={NotesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NOTE_SCREEN}
          component={NoteScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
