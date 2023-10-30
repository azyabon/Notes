import React, {Dispatch, useEffect, useState} from 'react';
import TopBar from '../../shared/TopBar';
import {Alert, ScrollView, Text, View} from 'react-native';
import {INote} from '../../types/INote';
import MiniButton from '../../ui/MiniButton';
import RemoveIcon from '../../icons/RemoveIcon';
import {colors} from '../../styles/colors';
import ArchivedIcon from '../../icons/ArchivedIcon';
import Button from '../../ui/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Point from '../../ui/Point';
import {getNoteLabelByStatus} from '../../utils/getNoteLabelByStatus';
import {archivedNote, unarchivedNote} from '../../actions/notes';
import {useDispatch, useSelector} from 'react-redux';
import UnarchiveIcon from '../../icons/UnarchiveIcon';
import {getNoteById} from '../../utils/getNoteById';

import {styles} from './NoteScreenStyles';
import Status from '../../ui/Status';
import {getNoteColorByStatus} from '../../utils/getNoteColorByStatus';

export default function NoteScreen({
  route,
}: {
  route: {params: {noteId: number}};
}) {
  const {noteId} = route.params;
  const [note, setNote] = useState<INote>();
  const insets = useSafeAreaInsets();
  const {notes} = useSelector(
    (state: {notes: {notes: INote[]}}) => state.notes,
  );
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    setNote(getNoteById(notes, noteId));
  }, [noteId, notes]);

  return (
    <View style={styles.NoteScreen}>
      <TopBar title={'NOTE'} isBack />
      {note && (
        <>
          <ScrollView contentContainerStyle={styles.NoteScreen__content}>
            <Point
              title={'Title:'}
              isRow
              children={
                <Text style={styles.NoteScreen__value}>{note?.title}</Text>
              }
            />
            <Point
              isRow
              title={'Type of your note:'}
              children={
                <Text style={styles.NoteScreen__value}>{note?.type}</Text>
              }
            />
            <Point
              title={'Text:'}
              children={
                <Text style={styles.NoteScreen__value}>{note?.text}</Text>
              }
            />
            <Point
              isRow
              title={'Date:'}
              children={
                <Text style={styles.NoteScreen__value}>{note?.date}</Text>
              }
            />
            <Point
              isRow
              title={'Archived:'}
              children={
                <Text style={styles.NoteScreen__value}>
                  {note?.isArchived ? 'yes' : 'no'}
                </Text>
              }
            />
            <Point
              title={'Deadline:'}
              isRow
              children={
                <Text style={styles.NoteScreen__value}>
                  {note?.deadline ? note.deadline : '-'}
                </Text>
              }
            />
            <Point
              isRow
              title={'Status:'}
              children={
                <Text style={styles.NoteScreen__value}>
                  <Status
                    color={getNoteColorByStatus(note?.status)}
                    label={getNoteLabelByStatus(note?.status)}
                  />
                </Text>
              }
            />
          </ScrollView>
          <View
            style={[
              styles.NoteScreen__footer,
              {paddingBottom: insets.bottom + 20},
            ]}>
            <Button maxWidth={'65%'} onPress={() => {}} label={'Edit'} />
            <MiniButton
              onPress={() => {}}
              backgroundColor={colors.red}
              icon={<RemoveIcon />}
            />
            <MiniButton
              onPress={() => {
                if (note?.isArchived) {
                  Alert.alert('Note is unarchived!');
                  dispatch(unarchivedNote(note?.id));
                } else {
                  Alert.alert('Note is archived!');
                  dispatch(archivedNote(note?.id));
                }
              }}
              icon={note?.isArchived ? <UnarchiveIcon /> : <ArchivedIcon />}
            />
          </View>
        </>
      )}
    </View>
  );
}
