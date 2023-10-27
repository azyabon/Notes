import React from 'react';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../styles/colors';

import {styles} from './AddNoteSheetStyles';

function AddNoteSheet(props: SheetProps) {
  return (
    <ActionSheet
      id={props.sheetId}
      statusBarTranslucent={false}
      drawUnderStatusBar={false}
      gestureEnabled
      enableGesturesInScrollView
      indicatorStyle={{
        width: 40,
        height: 3,
        marginTop: 8,
        backgroundColor: colors.gray,
      }}
      containerStyle={styles.AddNoteSheet}
      springOffset={50}
      defaultOverlayOpacity={0.3}>
      <ScrollView
        contentContainerStyle={{paddingVertical: 20}}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Text>Add new note</Text>
      </ScrollView>
    </ActionSheet>
  );
}

export default AddNoteSheet;
