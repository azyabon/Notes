import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  NoteSettingsSheet: {
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.lightDark,
  },

  NoteSettingsSheet__row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  NoteSettingsSheet__point: {
    color: colors.white,
    fontSize: 18,
  },
});
