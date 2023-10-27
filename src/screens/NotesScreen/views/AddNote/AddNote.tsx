import React from 'react';
import {Pressable, Text} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import {SheetsId} from '../../../../config/sheetsId';

import {styles} from './AddNoteStyles';

export default function AddNote() {
  return (
    <Pressable
      style={styles.AddNote}
      onPress={() => SheetManager.show(SheetsId.ADD_NOTE_SHEET)}>
      <Text style={styles.AddNote__plus}>+</Text>
    </Pressable>
  );
}
