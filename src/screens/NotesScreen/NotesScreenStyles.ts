import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  NotesScreen: {
    flex: 1,
    backgroundColor: colors.lightDark,
  },

  NotesScreen__content: {
    paddingBottom: 40,
  },

  NotesScreen__notes: {
    padding: 20,
    paddingTop: 0,
    gap: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  NotesScreen__header: {
    flexDirection: 'row',
    gap: 8,
    padding: 20,
    backgroundColor: colors.lightDark,
  },

  NotesScreen__search: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.dark,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.blue,
    color: colors.white,
  },
});
