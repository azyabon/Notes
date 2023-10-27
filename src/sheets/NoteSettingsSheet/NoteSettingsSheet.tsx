import React, {useEffect} from 'react';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../styles/colors';
import Toggle from '../../ui/Toggle';

import {styles} from './NoteSettingsSheetStyles';

function NoteSettingsSheet(props: SheetProps) {
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
      containerStyle={styles.NoteSettingsSheet}
      springOffset={50}
      defaultOverlayOpacity={0.3}>
      <ScrollView
        contentContainerStyle={{paddingVertical: 20, gap: 6}}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.NoteSettingsSheet__row}>
          <Text style={styles.NoteSettingsSheet__point}>
            Show notes as a list:
          </Text>
          <Toggle
            initialValue={props.payload.isListView}
            onToggle={(bool: boolean) => props.payload.changeNotesView(bool)}
          />
        </View>
        <View style={styles.NoteSettingsSheet__row}>
          <Text style={styles.NoteSettingsSheet__point}>Show card status:</Text>
          <Toggle
            initialValue={props.payload.isShowStatus}
            onToggle={(bool: boolean) => props.payload.changeStatusView(bool)}
          />
        </View>
      </ScrollView>
    </ActionSheet>
  );
}

export default NoteSettingsSheet;
