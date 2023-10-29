import React, {Dispatch, useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {Alert, Text, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../styles/colors';
import RadioGroupElements from '../../ui/RadioGroup/RadioGroup';
import {getNoteStatusList} from '../../utils/getNoteStatusList';
import Button from '../../ui/Button/Button';
import {useDispatch} from 'react-redux';
import {addNote} from '../../actions/notes';
import {SheetsId} from '../../config/sheetsId';
import {NoteStatusEnum} from '../../enums/NoteStatusEnum';
import Point from '../../ui/Point';

import {styles} from './AddNoteSheetStyles';

function AddNoteSheet(props: SheetProps) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState(
    props.payload?.status ?? NoteStatusEnum.WAITING.toString(),
  );
  const dispatch: Dispatch<any> = useDispatch();

  const addNewNote = () => {
    if (text && title) {
      dispatch(
        addNote({
          id: Date.now(),
          type,
          title,
          status,
          text,
          isArchived: false,
          date: new Date().toDateString(),
          deadline: '',
        }),
      );
      SheetManager.hide(SheetsId.ADD_NOTE_SHEET);
    } else {
      Alert.alert('Error!', 'fill');
    }
  };

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
        contentContainerStyle={{paddingVertical: 20, gap: 8}}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Text style={styles.AddNoteSheet__title}>
          {props.payload?.isEdit ? 'Edit note' : 'Add new note'}
        </Text>
        {props.payload?.isEdit && (
          <RadioGroupElements
            title={'Choose status:'}
            items={getNoteStatusList()}
            selectedId={status}
            onChange={(value: string) => setStatus(value)}
          />
        )}
        <Point
          title={'Title:'}
          children={
            <TextInput
              style={styles.AddNoteSheet__input}
              onChangeText={setTitle}
              value={title}
              placeholder={'Write title...'}
              placeholderTextColor={colors.white}
            />
          }
        />
        <Point
          title={'Type of your note:'}
          children={
            <TextInput
              style={styles.AddNoteSheet__input}
              onChangeText={setType}
              value={type}
              placeholder={'Write type...'}
              placeholderTextColor={colors.white}
            />
          }
        />
        <Point
          title={'Text:'}
          children={
            <TextInput
              style={styles.AddNoteSheet__input}
              onChangeText={setText}
              value={text}
              multiline={true}
              numberOfLines={5}
              placeholder={'Write text...'}
              placeholderTextColor={colors.white}
            />
          }
        />
        <Button onPress={addNewNote} label={'ADD'} />
      </ScrollView>
    </ActionSheet>
  );
}

export default AddNoteSheet;
