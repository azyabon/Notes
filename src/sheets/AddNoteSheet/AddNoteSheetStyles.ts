import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  AddNoteSheet: {
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.lightDark,
  },

  AddNoteSheet__title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 20,
  },

  AddNoteSheet__input: {
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
