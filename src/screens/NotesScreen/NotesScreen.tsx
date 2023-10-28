import React, {useState} from 'react';
import {RefreshControl, ScrollView, TextInput, View} from 'react-native';
import TopBar from '../../shared/TopBar';
import NoteCard from './views/NoteCard/NoteCard';
import {INote} from '../../types/INote';
import AddNote from './views/AddNote/AddNote';
import {colors} from '../../styles/colors';
import MiniButton from '../../ui/MiniButton';
import FilterIcon from '../../icons/FilterIcon';
import {SheetManager} from 'react-native-actions-sheet';
import {SheetsId} from '../../config/sheetsId';
import SettingsIcon from '../../icons/SettingsIcon';
import {useSelector} from 'react-redux';

import {styles} from './NotesScreenStyles';

const HEIGHT_BEFORE_HIDE_BTNS = 2;

export default function NotesScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = React.useState('');
  const [isList, setIsList] = useState(false);
  const [isShowStatus, setIsShowStatus] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const {notes} = useSelector(
    (state: {notes: {notes: INote[]}}) => state.notes,
  );

  return (
    <View style={styles.NotesScreen}>
      <TopBar title={'NOTES'} />
      <AddNote />
      <ScrollView
        stickyHeaderIndices={[0]}
        scrollEventThrottle={50}
        onScroll={event => {
          const y = event.nativeEvent.contentOffset.y;
          if (y >= HEIGHT_BEFORE_HIDE_BTNS) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }}
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
        <View>
          <View style={styles.NotesScreen__header}>
            <TextInput
              style={styles.NotesScreen__search}
              onChangeText={setSearch}
              value={search}
              placeholder={'Search by title...'}
              placeholderTextColor={colors.white}
            />
            {!isScrolled && (
              <>
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
                        changeStatusView: (bool: boolean) =>
                          setIsShowStatus(bool),
                      },
                    })
                  }
                />
              </>
            )}
          </View>
        </View>
        <View style={styles.NotesScreen__notes}>
          {notes.map((note: INote) => (
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
