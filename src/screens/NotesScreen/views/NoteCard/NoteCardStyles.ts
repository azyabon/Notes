import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  NoteCard: {
    height: 190,
    padding: 14,
    borderRadius: 8,
    backgroundColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    borderWidth: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  NoteCard__title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.white,
    textAlign: 'left',
  },

  NoteCard__text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
    textAlign: 'left',
  },

  NoteCard__date: {
    fontSize: 11,
    fontWeight: '400',
    textAlign: 'right',
    color: colors.white,
  },

  NoteCard__type: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'left',
  },

  NoteCard__status: {
    fontSize: 11,
    fontWeight: '500',
  },

  NoteCard__line: {
    borderBottomWidth: 2,
    borderColor: colors.lightDark,
    marginVertical: 2,
  },
});
