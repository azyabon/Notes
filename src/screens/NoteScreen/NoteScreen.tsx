import React from 'react';
import TopBar from '../../shared/TopBar';
import {ScrollView, Text, View} from 'react-native';

import {styles} from './NoteScreenStyles';

export default function NoteScreen() {
  return (
    <View style={styles.NoteScreen}>
      <TopBar title={'NOTE'} isBack />
      <ScrollView contentContainerStyle={styles.NoteScreen__content}>
        <Text>Note</Text>
      </ScrollView>
    </View>
  );
}
