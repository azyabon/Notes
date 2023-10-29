import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  NoteScreen: {
    flex: 1,
    backgroundColor: colors.lightDark,
  },

  NoteScreen__content: {
    padding: 20,
    gap: 8,
  },

  NoteScreen__value: {
    fontSize: 14,
    color: colors.white,
  },

  NoteScreen__footer: {
    gap: 6,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
