import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  ArchiveScreen: {
    flex: 1,
    backgroundColor: colors.lightDark,
  },

  ArchiveScreen__content: {
    paddingBottom: 40,
  },

  ArchiveScreen__control: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ArchiveScreen__hint: {
    padding: 20,
    paddingBottom: 0,
    fontSize: 12,
    fontWeight: '500',
    color: colors.blue,
    lineHeight: 18,
    textAlign: 'center',
  },

  ArchiveScreen__notes: {
    padding: 20,
    gap: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
