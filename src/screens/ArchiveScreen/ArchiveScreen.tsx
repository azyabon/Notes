import React, {Dispatch, useState} from 'react';
import {Alert, RefreshControl, ScrollView, Text, View} from 'react-native';
import TopBar from '../../shared/TopBar';
import {INote} from '../../types/INote';
import NoteCard from '../NotesScreen/views/NoteCard/NoteCard';
import {useDispatch, useSelector} from 'react-redux';
import MiniButton from '../../ui/MiniButton';
import RemoveIcon from '../../icons/RemoveIcon';
import UnarchiveIcon from '../../icons/UnarchiveIcon';
import {unarchivedNotes} from '../../actions/notes';
import {colors} from '../../styles/colors';

import {styles} from './ArchiveScreenStyles';

export default function ArchiveScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const {notes} = useSelector(
    (state: {notes: {notes: INote[]}}) => state.notes,
  );
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <View style={styles.ArchiveScreen}>
      <TopBar title={'ARCHIVE'} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => setRefreshing(false), 2000);
            }}
          />
        }
        contentContainerStyle={styles.ArchiveScreen__content}>
        <Text style={styles.ArchiveScreen__hint}>
          Archived notes are located here. You can either revert them back to
          current notes or delete them permanently.
        </Text>
        <View style={styles.ArchiveScreen__notes}>
          {notes
            .filter((note: INote) => note.isArchived)
            .map((note: INote) => (
              <NoteCard
                key={note.id}
                note={note}
                isListView={true}
                withoutStatus={true}
              />
            ))}
        </View>
      </ScrollView>
      <View style={styles.ArchiveScreen__control}>
        <MiniButton
          backgroundColor={colors.red}
          width={'49%'}
          onPress={() => {}}
          icon={<RemoveIcon />}
        />
        <MiniButton
          width={'49%'}
          onPress={() => {
            Alert.alert('All notes were unarchived!');
            dispatch(unarchivedNotes());
          }}
          icon={<UnarchiveIcon />}
        />
      </View>
    </View>
  );
}
