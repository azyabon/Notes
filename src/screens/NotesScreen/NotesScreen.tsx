import React, {useState} from 'react';
import {RefreshControl, ScrollView, TextInput, View} from 'react-native';
import TopBar from '../../shared/TopBar';
import NoteCard from './views/NoteCard/NoteCard';
import {NoteStatusEnum} from '../../enums/NoteStatusEnum';
import {INote} from '../../types/INote';
import AddNote from './views/AddNote/AddNote';
import {colors} from '../../styles/colors';
import MiniButton from '../../ui/MiniButton';
import FilterIcon from '../../icons/FilterIcon';
import {SheetManager} from 'react-native-actions-sheet';
import {SheetsId} from '../../config/sheetsId';
import SettingsIcon from '../../icons/SettingsIcon';

import {styles} from './NotesScreenStyles';

const mock_notes = [
  {
    id: 1,
    title: 'COOK',
    text: 'cook cook cook',
    date: '5 July, 12:00 PM',
    status: NoteStatusEnum.DONE,
  },
  {
    id: 2,
    title: 'COOK',
    text: 'cook cook cook',
    date: '5 July, 12:00 PM',
    type: 'Home',
    deadline: 'Today, 17:00 PM',
    status: NoteStatusEnum.EXPIRED,
  },
  {
    id: 3,
    title: 'COOK',
    text: 'cook cook cook',
    date: '5 July, 12:00 PM',
    type: 'Home',
    status: NoteStatusEnum.DOING,
  },
  {
    id: 4,
    title: 'COOK',
    text:
      'cook cook cook cook cook cook ' +
      'cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook cook',
    date: '5 July, 12:00 PM',
    deadline: 'Today, 17:00 PM',
    status: NoteStatusEnum.WAITING,
  },
];

export default function NotesScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = React.useState('');
  const [isList, setIsList] = useState(false);
  const [isShowStatus, setIsShowStatus] = useState(true);

  return (
    <View style={styles.NotesScreen}>
      <TopBar title={'NOTES'} />
      <AddNote />
      <ScrollView
        // stickyHeaderIndices={[0]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => setRefreshing(false), 2000);
            }}
          />
        }
        contentContainerStyle={styles.NotesScreen__content}>
        <View style={styles.NotesScreen__header}>
          <TextInput
            style={styles.NotesScreen__search}
            onChangeText={setSearch}
            value={search}
            placeholder={'Search by title...'}
            placeholderTextColor={colors.white}
          />
          <MiniButton
            icon={<FilterIcon />}
            onPress={() => SheetManager.show(SheetsId.NOTES_FILTER_SHEET)}
          />
          <MiniButton
            icon={<SettingsIcon />}
            onPress={() =>
              SheetManager.show(SheetsId.NOTES_SETTINGS_SHEET, {
                payload: {
                  changeNotesView: (bool: boolean) => setIsList(bool),
                  isListView: isList,
                  isShowStatus: isShowStatus,
                  changeStatusView: (bool: boolean) => setIsShowStatus(bool),
                },
              })
            }
          />
        </View>
        <View style={styles.NotesScreen__notes}>
          {mock_notes.map((note: INote) => (
            <NoteCard
              key={note.id}
              note={note}
              isListView={isList}
              withoutStatus={isShowStatus}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
